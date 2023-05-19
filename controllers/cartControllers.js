import { Product, Cart } from "../models/models.js";
export const getCart = (req, res) => {
  Cart.findAll()
    .then((cart) => {
      res.status(200).send(cart);
    })
    .catch((err) => console.log(err));
};

// const cartUUID = uuidv4();

// // Check if a cart with the given UUID already exists
// Cart.findOne({
//   where: { userId: cartUUID },
// })
//   .then((existingCart) => {
//     if (existingCart) {
//       // Cart with the given UUID already exists, proceed with adding items
//       addToCart(existingCart);
//     } else {
//       // Cart with the given UUID doesn't exist, create a new cart and add items
//       createCart();
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).send("Error checking cart existence");
//   });

export const addToCart = (req, res) => {
  const productId = req.body.productId;
  const quantity = req.body.cartQuantity;

  // Find the product by its ID in the product database
  Product.findByPk(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      if (product.productQuantity <= 0) {
        return res.status(400).send("Product is out of stock");
      }
      if (quantity > product.productQuantity) {
        return res.status(400).send("Insufficient product quantity");
      }

      // Create a new cart item with the product details and quantity
      Cart.create({
        userId: req.body.uuid,
        cartQuantity: quantity,
        cartPrice: product.productPrice,
        productId: product.productId,
        cartName: product.productName,
        cartImage: product.productImage,
      })
        .then((cartItem) => {
          // Decrement the product quantity by the amount added to the cart
          Product.update(
            {
              productQuantity: product.productQuantity - quantity,
            },
            {
              where: { productId: product.productId },
            }
          )
            .then(() => {
              res.status(200).send(cartItem);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Error updating product quantity");
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Error adding item to cart");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving product");
    });
};

export const deleteFromCart = (req, res) => {
  const cartItemId = req.params.id;

  // Find the cart item by its ID in the cart database
  Cart.findByPk(cartItemId)
    .then((cartItem) => {
      if (!cartItem) {
        return res.status(404).send("Cart item not found");
      }

      // Find the associated product of the cart item
      Product.findByPk(cartItem.productId)
        .then((product) => {
          if (!product) {
            console.log("Invalid product ID:", cartItem.productId);
            return res.status(404).send("Product not found");
          }

          // Update the product quantity by adding back the quantity from the cart item
          product
            .increment("productQuantity", {
              by: cartItem.cartQuantity,
            })
            .then(() => {
              // Delete the cart item
              cartItem
                .destroy()
                .then(() => {
                  res.status(200).send("Cart item deleted successfully");
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).send("Error deleting cart item");
                });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Error updating product quantity");
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Error retrieving product");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving cart item");
    });
};

export const updateCart = (req, res) => {
  const cartItemId = req.params.id;
  let quantity = req.body.cartQuantity; // Default to 1 if no quantity is provided

  if (!quantity || quantity === 0) {
    quantity = 1;
  }

  // Find the cart item by its ID in the cart database
  Cart.findByPk(cartItemId)
    .then((cartItem) => {
      if (!cartItem) {
        return res.status(404).send("Cart item not found");
      }

      // Find the associated product of the cart item
      Product.findByPk(cartItem.productId)
        .then((product) => {
          if (!product) {
            return res.status(404).send("Product not found");
          }

          const quantityDifference = quantity - cartItem.cartQuantity;

          // Update the product quantity by adjusting the difference
          Product.update(
            {
              productQuantity: product.productQuantity - quantityDifference,
            },
            {
              where: { productId: product.productId },
            }
          )
            .then(() => {
              // Update the cart item quantity
              cartItem
                .update({ cartQuantity: quantity })
                .then((updatedCartItem) => {
                  res.status(200).send(updatedCartItem);
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).send("Error updating cart item quantity");
                });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Error updating product quantity");
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Error retrieving product");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving cart item");
    });
};
