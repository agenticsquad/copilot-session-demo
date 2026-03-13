const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const { coerceProductPayload } = require('../utils/validators');

const dataFilePath = path.join(__dirname, 'products.json');
const seedProducts = [
  {
    id: 'prd-1001',
    name: 'Laptop Atlas 14',
    category: 'Electronics',
    sku: 'ELEC-LAP-014',
    quantity: 12,
    minStock: 5,
    price: 18500,
    createdAt: '2026-03-01T09:00:00.000Z',
    updatedAt: '2026-03-01T09:00:00.000Z'
  },
  {
    id: 'prd-1002',
    name: 'Monitor Curvo 27',
    category: 'Electronics',
    sku: 'ELEC-MON-027',
    quantity: 7,
    minStock: 3,
    price: 6400,
    createdAt: '2026-03-01T09:05:00.000Z',
    updatedAt: '2026-03-01T09:05:00.000Z'
  },
  {
    id: 'prd-1003',
    name: 'Mouse Inalámbrico Atlas',
    category: 'Electronics',
    sku: 'ELEC-MOU-001',
    quantity: 25,
    minStock: 10,
    price: 480,
    createdAt: '2026-03-01T09:10:00.000Z',
    updatedAt: '2026-03-01T09:10:00.000Z'
  },
  {
    id: 'prd-2001',
    name: 'Cuaderno Ejecutivo A5',
    category: 'Office Supplies',
    sku: 'OFF-NBK-A5',
    quantity: 40,
    minStock: 15,
    price: 95,
    createdAt: '2026-03-01T09:15:00.000Z',
    updatedAt: '2026-03-01T09:15:00.000Z'
  },
  {
    id: 'prd-2002',
    name: 'Paquete de Plumones',
    category: 'Office Supplies',
    sku: 'OFF-MRK-010',
    quantity: 18,
    minStock: 8,
    price: 210,
    createdAt: '2026-03-01T09:20:00.000Z',
    updatedAt: '2026-03-01T09:20:00.000Z'
  },
  {
    id: 'prd-3001',
    name: 'Escritorio Ajustable',
    category: 'Furniture',
    sku: 'FUR-DSK-001',
    quantity: 4,
    minStock: 2,
    price: 9200,
    createdAt: '2026-03-01T09:25:00.000Z',
    updatedAt: '2026-03-01T09:25:00.000Z'
  },
  {
    id: 'prd-3002',
    name: 'Silla Ergonómica',
    category: 'Furniture',
    sku: 'FUR-CHR-001',
    quantity: 9,
    minStock: 4,
    price: 5100,
    createdAt: '2026-03-01T09:30:00.000Z',
    updatedAt: '2026-03-01T09:30:00.000Z'
  }
];

function ensureSeedData(callback) {
  fs.access(dataFilePath, fs.constants.F_OK, (accessError) => {
    if (!accessError) {
      return callback();
    }

    // Comentario de negocio: dejamos datos realistas para que el backlog tenga contexto en vivo.
    fs.writeFile(dataFilePath, JSON.stringify(seedProducts, null, 2), 'utf8', callback);
  });
}

function readProducts(callback) {
  ensureSeedData((seedError) => {
    if (seedError) {
      return callback(seedError);
    }

    fs.readFile(dataFilePath, 'utf8', (readError, fileContents) => {
      if (readError) {
        return callback(readError);
      }

      try {
        const products = JSON.parse(fileContents || '[]');
        callback(null, products);
      } catch (parseError) {
        callback(parseError);
      }
    });
  });
}

function writeProducts(products, callback) {
  fs.writeFile(dataFilePath, JSON.stringify(products, null, 2), 'utf8', (writeError) => {
    callback(writeError, products);
  });
}

/**
 * Lists products from storage.
 * @param {{ category?: string }} options
 * @param {(error: Error | null, products?: Array<object>) => void} callback
 */
function listProducts(options, callback) {
  readProducts((error, products) => {
    if (error) {
      return callback(error);
    }

    // Comentario de negocio: el filtro por categoría se queda roto a propósito para el demo del issue #2.
    callback(null, products);
  });
}

/**
 * Finds one product by id.
 * @param {string} productId
 * @param {(error: Error | null, product?: object | null) => void} callback
 */
function getProductById(productId, callback) {
  readProducts((error, products) => {
    if (error) {
      return callback(error);
    }

    const product = products.find((item) => item.id === productId) || null;
    callback(null, product);
  });
}

/**
 * Creates a new product record.
 * @param {object} payload
 * @param {(error: Error | null, product?: object) => void} callback
 */
function createProduct(payload, callback) {
  readProducts((error, products) => {
    if (error) {
      return callback(error);
    }

    const normalizedPayload = coerceProductPayload(payload);
    const timestamp = new Date().toISOString();
    const product = {
      id: randomUUID(),
      ...normalizedPayload,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    products.push(product);
    writeProducts(products, (writeError) => {
      callback(writeError, product);
    });
  });
}

/**
 * Updates an existing product record.
 * @param {string} productId
 * @param {object} payload
 * @param {(error: Error | null, product?: object | null) => void} callback
 */
function updateProduct(productId, payload, callback) {
  readProducts((error, products) => {
    if (error) {
      return callback(error);
    }

    const productIndex = products.findIndex((item) => item.id === productId);
    if (productIndex === -1) {
      return callback(null, null);
    }

    const normalizedPayload = coerceProductPayload(payload);
    const updatedProduct = {
      ...products[productIndex],
      ...normalizedPayload,
      id: products[productIndex].id,
      createdAt: products[productIndex].createdAt,
      updatedAt: new Date().toISOString()
    };

    products[productIndex] = updatedProduct;
    writeProducts(products, (writeError) => {
      callback(writeError, updatedProduct);
    });
  });
}

/**
 * Deletes a product record.
 * @param {string} productId
 * @param {(error: Error | null, product?: object | null) => void} callback
 */
function deleteProduct(productId, callback) {
  readProducts((error, products) => {
    if (error) {
      return callback(error);
    }

    const productIndex = products.findIndex((item) => item.id === productId);
    if (productIndex === -1) {
      return callback(null, null);
    }

    const removedProducts = products.splice(productIndex, 1);
    writeProducts(products, (writeError) => {
      callback(writeError, removedProducts[0]);
    });
  });
}

module.exports = {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
