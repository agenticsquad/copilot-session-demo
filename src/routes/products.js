const express = require('express');
const productModel = require('../models/product');

/**
 * Creates the products API router.
 * @returns {import('express').Router}
 */
function createProductsRouter() {
  const router = express.Router();

  router.get('/', (request, response, next) => {
    try {
      productModel.listProducts({ category: request.query.category }, (error, products) => {
        if (error) {
          return next(error);
        }

        response.json({ success: true, data: products });
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', (request, response, next) => {
    try {
      productModel.getProductById(request.params.id, (error, product) => {
        if (error) {
          return next(error);
        }

        if (!product) {
          return response.status(404).json({ success: false, data: null, error: 'Producto no encontrado' });
        }

        response.json({ success: true, data: product });
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', (request, response, next) => {
    try {
      productModel.createProduct(request.body, (error, product) => {
        if (error) {
          return next(error);
        }

        response.status(201).json({ success: true, data: product });
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:id', (request, response, next) => {
    try {
      productModel.updateProduct(request.params.id, request.body, (error, product) => {
        if (error) {
          return next(error);
        }

        if (!product) {
          return response.status(404).json({ success: false, data: null, error: 'Producto no encontrado' });
        }

        response.json({ success: true, data: product });
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', (request, response, next) => {
    try {
      productModel.deleteProduct(request.params.id, (error, product) => {
        if (error) {
          return next(error);
        }

        if (!product) {
          return response.status(404).json({ success: false, data: null, error: 'Producto no encontrado' });
        }

        response.json({ success: true, data: product });
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}

module.exports = createProductsRouter;
