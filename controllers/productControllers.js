import e from 'express';
import {Product} from '../models/productModel.js';

export const getAllProducts =  (req, res) => {
    Product.findAll()
    .then((product) => {
        res.status(200).send(product);
        
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.findByPk(id)
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addProduct = (req, res) => {
    const product = req.body.product;
    Product.create(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product added successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deleteProduct = (req, res) => {
    const product = req.body.product;
    Product.destroy(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deleteProductById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.destroy(id)
    .then((product) => {
        res.status(203).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getAlllaptops = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            productType: "Laptop"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const getAlllaptopsById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.findAll({
        where: {
            productType: "Laptop"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addlaptop = (req, res) => {
    const product = req.body.product;
    Product.create(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product added successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deletelaptop = (req, res) => {
    const product = req.body.product;
    Product.destroy(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deletelaptopById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.destroy(id)
    .then((product) => {
        res.status(203).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}
export const getAllheadphones = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            productType: "Headphones"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const getAllheadphonesById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.findAll({
        where: {
            productType: "Headphones"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addheadphones = (req, res) => {
    const product = req.body.product;
    Product.create(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product added successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deleteheadphones = (req, res) => {
    const product = req.body.product;
    Product.destroy(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deleteheadphonesById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.destroy(id)
    .then((product) => {
        res.status(203).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getAllspeakers = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            productType: "Speakers"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const getAllspeakersById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.findAll({
        where: {
            productType: "Speakers"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addspeakers = (req, res) => {
    const product = req.body.product;
    Product.create(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product added successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deletespeakers = (req, res) => {
    const product = req.body.product;
    Product.destroy(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deletespeakersById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.destroy(id)
    .then((product) => {
        res.status(203).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getAllsmartwatches = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            productType: "Smart Watches"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const getAllsmartwatchesById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.findAll({
        where: {
            productType: "Smart Watches"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addsmartwatches = (req, res) => {
    const product = req.body.product;
    Product.create(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product added successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deletesmartwatches = (req, res) => {
    const product = req.body.product;
    Product.destroy(product)
    .then((product) => {
        res.status(201).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deletesmartwatchesById = (req, res) => {
    const id = parseInt(req.params.id);
    Product.destroy(id)
    .then((product) => {
        res.status(203).send(product);
        message: "Product deleted successfully!"
    })
    .catch((err) => {
        console.log(err);
    })
}
export const filterByPrice = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            price: {
                [Op.lte]: 10000
            }
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const filterByPriceByType = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            price: {
                [Op.lte]: 10000
            },
            productType: "Headphones"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const filterByPriceByTypeByBrand = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            price: {
                [Op.lte]: 10000
            },
            productType: "Headphones",
            brand: "Sony"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const filterByPricelowtohigh = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        order: [
            ['price', 'ASC']
        ]
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const filterByPricehightolow = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        order: [
            ['price', 'DESC']
        ]
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err);
    })
}
export const searchByBrand = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            brand: "Sony"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err)
    })
}
export const searchByBrandByType = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            brand: "Sony",
            productType: "Headphones"
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err)
    })
}
export const searchAll = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        where: {
            [Op.or]: [
                {brand: "Sony"},
                {productType: "Headphones"}
            ]
        }
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err)
    })
}
export const filterByHighestRated = (req, res) => {
    const product = req.body.product;
    Product.findAll({
        order: [
            ['rating', 'DESC']
        ]
    })
    .then((product) => {
        res.status(200).send(product);
    })
    .catch((err) => {
        console.log(err)
    })
}
