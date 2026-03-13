const path = require('path');
const express = require('express');
const cors = require('cors');
const createProductsRouter = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));

app.get('/health', (request, response) => {
  response.json({ success: true, data: { status: 'ok' } });
});

app.use('/api/products', createProductsRouter());
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Equipo Atlas inventory app listening on port ${port}`);
});

module.exports = app;
