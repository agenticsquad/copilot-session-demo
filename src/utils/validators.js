/**
 * Normalizes product payload fields without enforcing validation rules yet.
 * @param {Record<string, unknown>} payload
 * @returns {{ name: string, category: string, sku: string, quantity: number, minStock: number, price: number }}
 */
function coerceProductPayload(payload = {}) {
  return {
    name: String(payload.name || '').trim(),
    category: String(payload.category || '').trim(),
    sku: String(payload.sku || '').trim(),
    quantity: Number(payload.quantity || 0),
    minStock: Number(payload.minStock || 0),
    price: Number(payload.price || 0)
  };
}

module.exports = {
  coerceProductPayload
};
