import { Product } from "../models/models.js";
import { Op } from "sequelize";

export const getProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

export const getLaptops = (req, res) => {
  Product.findAll({
    where: {
      [Op.or]: [
        { type: { [Op.iLike]: "%laptop%" } },
        { type: { [Op.iLike]: "%laptops%" } },
      ],
    },
  })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

export const getSmartwatches = (req, res) => {
  Product.findAll({
    where: {
      [Op.or]: [
        { type: { [Op.iLike]: "%smartwatch%" } },
        { type: { [Op.iLike]: "%smartwatches%" } },
        { type: { [Op.iLike]: "%smartwatchs%" } },
      ],
    },
  })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

export const getHeadphones = (req, res) => {
  Product.findAll({
    where: {
      [Op.or]: [
        { type: { [Op.iLike]: "%headphone%" } },
        { type: { [Op.iLike]: "%headphones%" } },
      ],
    },
  })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

export const getSpeakers = (req, res) => {
  Product.findAll({
    where: {
      [Op.or]: [
        { type: { [Op.iLike]: "%speaker%" } },
        { type: { [Op.iLike]: "%speakers%" } },
      ],
    },
  })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

export const addProduct = (req, res) => {
  Product.create({
    productCompany: req.body.productCompany,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productType: req.body.productType,
    productImage: req.body.productImage,
    productDescription: req.body.productDescription,
    productQuantity: req.body.productQuantity,
  })
    .then(() => {
      res.status(201).send("Product created" || "Product unable to be created");
    })
    .catch((err) => console.log(err));
};

export const removeProductById = (req, res) => {
  const id = parseInt(req.params.productId);
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
  const id = parseInt(req.params.productId);

  Product.update(
    {
      productCompany: req.body.productCompany,
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productType: req.body.productType,
      productImage: req.body.productImage,
      productDescription: req.body.productDescription,
      productQuantity: req.body.productQuantity,
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
