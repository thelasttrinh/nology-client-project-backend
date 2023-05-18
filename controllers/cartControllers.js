import { Product, Cart } from "../models/models.js";
export const getCart = (req, res) => {
  Cart.findAll()
    .then((cart) => {
      res.status(200).send(cart);
    })
    .catch((err) => console.log(err));
};

export const addToCart = (req, res) => {
  const productId = req.body.id;
  const quantity = req.body.quantity;

  // Find the product by its ID in the product database
  Product.findByPk(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      if (product.quantity <= 0) {
        return res.status(400).send("Product is out of stock");
      }
      if (quantity > product.quantity) {
        return res.status(400).send("Insufficient product quantity");
      }

      // Create a new cart item with the product details and quantity
      Cart.create({
        userId: req.body.uuid,
        quantity: quantity,
        price: product.price,
        productId: product.id,
      })
        .then((cartItem) => {
          // Decrement the product quantity by the amount added to the cart
          Product.update(
            {
              quantity: product.quantity - quantity,
            },
            {
              where: { id: product.id },
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
  const cartItemId = req.body.id;

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
            .increment("quantity", {
              by: cartItem.quantity,
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
  let quantity = req.body.quantity; // Default to 1 if no quantity is provided

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

          const quantityDifference = quantity - cartItem.quantity;

          // Update the product quantity by adjusting the difference
          Product.update({ quantity: product.quantity - quantityDifference })
            .then(() => {
              // Update the cart item quantity
              cartItem
                .update({ quantity: quantity })
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
