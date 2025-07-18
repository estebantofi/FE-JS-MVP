import { updateCartCount } from "./cartCount.js";
import { hamburguerMenu } from "./hamburguerMenu.js";

fetch("nav.html")
  .then((resp) => resp.text())
  .then((nav) => {
    document.getElementById("navbar").innerHTML = nav;

    hamburguerMenu();
    updateCartCount();
  });
