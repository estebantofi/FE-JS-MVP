// Actualiza el contador del carrito en el navbar en todas las páginas
export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "{}");

  const totalQty = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) {
    cartCountEl.textContent = totalQty;
  }
}
