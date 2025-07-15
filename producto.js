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
      container.innerHTML = ""; // Limpiar container
    data.data.forEach((card) => {
      const cardHTML = `
        <div class="card">
          <img src="${card.images.small}" alt="${card.name}" />
            <div class="card-info">
                <div class="card-title">
                ${card.name}
                </div>
                <div class="card-title">
                ${"$" + card.cardmarket.prices.trendPrice || "-"}
                </div>
            </div>
          <hr style="width: 100%"/>
          <div class="card-desc">${
            card.flavorText || card.set?.name || "Tarjeta de Pokémon TCG"
          }</div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", cardHTML);
    });
  });
