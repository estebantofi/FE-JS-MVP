import { updateCartCount } from "./cartCount.js";

fetch("nav.html")
  .then((res) => res.text())
  .then((nav) => {
    document.getElementById("navbar").innerHTML = nav;
    updateCartCount();
  });

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "{}");

  const tbody = document.querySelector("#cart-table tbody");
  tbody.innerHTML = "";

  let total = 0;

  Object.values(cart).forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <button class="btn-minus" data-id="${item.id}">-</button>
        <span>${item.quantity}</span>
        <button class="btn-plus" data-id="${item.id}">+</button>
      </td>
      <td>$${item.price}</td>
      <td>$${(item.price * item.quantity).toFixed(2)}</td>
      <td><button class="btn-remove" data-id="${item.id}">🗑️</button></td>
    `;

    tbody.appendChild(row);

    total += item.price * item.quantity;
  });

  document.getElementById("cart-total").textContent = `Total: $${total.toFixed(
    2
  )}`;
}

renderCart();

document.getElementById("cart-table").addEventListener("click", function (e) {
  const id = e.target.getAttribute("data-id");

  if (!id) {
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart") || "{}");
  let item = cart[id];

  if (!item) {
    return;
  }

  if (e.target.classList.contains("btn-plus")) {
    item.quantity++;
  }

  if (e.target.classList.contains("btn-minus") && item.quantity > 1) {
    item.quantity--;
  }

  if (e.target.classList.contains("btn-remove")) {
    delete cart[id];
    item = null;
  }

  if (item) {
    cart[id] = item;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
});

document.getElementById("btn-finalizar").onclick = function () {
  let cart = JSON.parse(localStorage.getItem("cart") || "{}");

  if (!Object.keys(cart).length) {
    alert(
      "El carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;
  } else {
    alert("¡Compra finalizada! Gracias por confiar en PokéCartas.");
    localStorage.removeItem("cart");

    updateCartCount();
    renderCart();
  }
};
