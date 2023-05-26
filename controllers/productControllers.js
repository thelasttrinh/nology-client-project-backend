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
      productType: "laptops",
      productType: "laptop",
      productType: "Laptops",
      productType: "Laptop",
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
      productType: "Smartwatches",
      productType: "Smartwatchs",
      productType: "smartwatches",
      productType: "smartwatchs",
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
      productType: "headphones",
      productType: "headphone",
      productType: "Headphones",
      productType: "Headphone",
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
      productType: "Speakers",
      productType: "Speaker",
      productType: "speakers",
      productType: "speaker",
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
    rating: req.body.rating,
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
        .send(`Product at ${id} updated` || `Product at id: ${id} not found`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  Product.findByPk(id)
    .then((product) => {
      res.status(200).send(product || `Product at id: ${id} not found`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const filterByPrice = (req, res) => {
  const min = parseFloat(req.query.min);
  const max = parseFloat(req.query.max);

  if (isNaN(min) || isNaN(max)) {
    console.log("Invalid price range:", req.query.min, req.query.max);
    return res.status(400).json({ error: "Invalid price range" });
  }

  if (min > max) {
    return res
      .status(400)
      .send("Error: Min is higher then Max, please set min lower then max");
  }

  if (min < 0) {
    min = 0;
  }

  Product.findAll({
    where: {
      productPrice: {
        [Op.between]: [min, max],
      },
    },
  })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const filterByHighestRated = (req, res) => {
  Product.findAll({
    order: [["rating", "DESC"]],
  })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const filterByPriceByType = (req, res) => {
  Product.findAll({
    where: {
      price: {
        [Op.lte]: 10000,
      },
      productType: "Headphones",
    },
  })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const filterByPriceByTypeByBrand = (req, res) => {
  const product = req.body.product;
  Product.findAll({
    where: {
      price: {
        [Op.lte]: 10000,
      },
      productType: "Headphones",
      brand: "Sony",
    },
  })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchAll = (req, res) => {
  const product = req.body.product;
  Product.findAll({
    where: {
      [Op.or]: [{ brand: "Sony" }, { productType: "Headphones" }],
    },
  })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};
