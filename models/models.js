import { Sequelize, UUIDV4 } from "sequelize";
import { sequelize } from "../db/index.js";

export const Product = sequelize.define("products", {
  productId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  productCompany: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

  productType: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },

  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  rating: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    allowNull: false,
  },
});

export const Cart = sequelize.define("cart", {
  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  cartName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cartImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cartQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cartPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Product.hasMany(Cart, { foreignKey: Product.id });
Cart.belongsTo(Product, { foreignKey: Product.id });
