import { updateCartCount } from "./cartCount.js";

fetch("nav.html")
  .then((resp) => resp.text())
  .then((nav) => {
    document.getElementById("navbar").innerHTML = nav;

    updateCartCount();
  });
