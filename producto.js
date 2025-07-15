const apiKey = window.env.API_KEY_POKEMON;
fetch("https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]", {
  headers: {
    "X-Api-Key": `${apiKey}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("container");
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
