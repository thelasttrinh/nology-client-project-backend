import { Product } from "../models/models.js";
import { Op } from "sequelize";

export const getProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => console.log(err));
};

// export const filterProductsByPrice = (req, res) => {
//   const priority = req.query.priority;
//   let order = [];

//   if (priority === "asc") {
//     order = [["price", "ASC"]];
//   } else if (priority === "desc") {
//     order = [["price", "DESC"]];
//   }
//   Product.findAll({
//     order: order,
//   })
//     .then((products) => {
//       res.status(200).send(products || "No products found");
//     })
//     .catch((err) => console.log(err));
// };

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
  //   const allowedTypes = ["headphone", "laptop", "smartwatch", "speaker"]; // array of allowed types of products
  //   const productType = (req.body.type || "").toLowerCase();
  //   console.log(req.body);

  // check if the product type is allowed
  Product.create({
    company: req.body.company,
    name: req.body.name,
    price: req.body.price,
    type: req.body.type,
    image_url: req.body.image_url,
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
      image_url: req.body.image_url,
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
