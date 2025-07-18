import { updateCartCount } from "./cartCount.js";
import { hamburguerMenu } from "./hamburguerMenu.js";

fetch("nav.html")
  .then((resp) => resp.text())
  .then((nav) => {
    document.getElementById("navbar").innerHTML = nav;

    hamburguerMenu();
    updateCartCount();
  });

const apiKey = window.env.API_KEY_POKEMON;
const container = document.getElementById("container");
// Loader
const loader = document.createElement("div");
loader.innerHTML = `<img src="img/loader.gif" alt="Cargando" style="width:200px;height:146px;margin-top:70%;" />
  <div style="text-align:center;">Cargando cartas...</div>`;
container.appendChild(loader);

fetch(
  "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]",
  {
    headers: {
      "X-Api-Key": `${apiKey}`,
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    // Limpia el container
    container.innerHTML = "";

    data.data.forEach((card) => {
      // Obtener carrito actual
      const cart = JSON.parse(localStorage.getItem("cart") || "{}");
      const quantity = cart[card.id]?.quantity || 0;
      const price = card.cardmarket?.prices?.trendPrice || 0;

      const cardHTML = `
        <div class="card">
          <img src="${card.images.small}" alt="${card.name}" />
            <div class="card-info">
                <div class="card-title">${card.name}</div>
                <div class="card-title">$${price}</div>
            </div>
          <div style="display:flex;align-items:center;justify-content:center;margin:10px 0;gap:8px;">
            <button class="btn-minus" data-id="${card.id}">-</button>
            <span class="card-qty" id="qty-${card.id}">${quantity}</span>
            <button class="btn-plus" data-id="${card.id}">+</button>
          </div>
          <hr style="width: 100%"/>
          <div class="card-desc">${
            card.flavorText || card.set?.name || "Tarjeta de Pokémon TCG"
          }</div>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Eventos para botones + y -
    container.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("btn-plus") ||
        e.target.classList.contains("btn-minus")
      ) {
        const id = e.target.getAttribute("data-id");
        const cardEl = document.getElementById("qty-" + id);

        let cart = JSON.parse(localStorage.getItem("cart") || "{}");
        let item = cart[id] || {
          id,
          name: e.target.closest(".card").querySelector(".card-title")
            .textContent,
          price: parseFloat(
            e.target
              .closest(".card")
              .querySelectorAll(".card-title")[1]
              .textContent.replace("$", "")
          ),
          quantity: 0,
        };

        if (e.target.classList.contains("btn-plus")) {
          item.quantity++;
        }

        if (e.target.classList.contains("btn-minus") && item.quantity > 0) {
          item.quantity--;
        }

        cart[id] = item;

        if (item.quantity === 0) {
          delete cart[id];
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        cardEl.textContent = item.quantity || 0;

        updateCartCount();
      }
    });
  });
