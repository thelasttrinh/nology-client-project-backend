import { Product } from "../models/models.js";

export const getProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

export const addProduct = (req, res) => {
  //   const allowedTypes = ["headphone", "laptop", "smartwatch", "speaker"]; // array of allowed types of products
  //   const productType = (req.body.type || "").toLowerCase();
  //   console.log(req.body);

  // check if the product type is allowed
  Product.create({
    company: req.body.company,
    name: req.body.name,
    price: req.body.price,
    type: req.body.type,
    description: req.body.description,
    quantity: req.body.quantity,
  })
    .then(() => {
      res.status(201).send("Product created" || "Product unable to be created");
    })
    .catch((err) => console.log(err));
};

export const removeProductById = (req, res) => {
  const id = parseInt(req.params.id);
  Product.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.status(204).send({
        message: `Product at id: ${id} deleted`,
      });
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  Product.update(
    {
      company: req.body.company,
      name: req.body.name,
      price: req.body.price,
      type: req.body.type,
      description: req.body.description,
      quantity: req.body.quantity,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res
        .status(200)
        .send(`Product at ${id} updated` || `Product  at ${id} not found`);
    })
    .catch((err) => {
      console.log(err);
    });
};
