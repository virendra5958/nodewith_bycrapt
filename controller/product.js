const ModelProduct = require("../models/product");
const jwt = require("jsonwebtoken");

const createProduct = async (req, res) => {
  console.log(req.headers.authorization);
};

const getProduct = async (req, res) => {
  res.json({
    success: true,
    massage: "Dummy Product get API Data",
  });
};


const editProduct = async (req, res) => {
    res.json({
      success: true,
      massage: "Dummy Product edit API Data",
    });
  };

  

const controller = {
  createProduct,
  getProduct,
  editProduct,
};

module.exports = controller;
