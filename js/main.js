import fetchProducts from "./api.js";
import { elements, renderProducts } from "./ui.js";
import { addToCart } from "./cart.js";

elements.menuIcon.addEventListener("click", () => {
  elements.menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", () => {
  // bu projede kullanıcı ana sayfada ise api den verileri almalı ve arayüzü renderlamalı
  // ama sepet sayfasında ise  sepetteki ürünleri renderlamalıyız.bu sebep ile hangi sayfada olduğumuza karar vermeliyiz.

  if (window.location.pathname.includes("/cart.html")) {
    // sepet sayfası işlemleri
  } else {
    // anasayfa işlemleri
    fetchProducts()
      .then((products) => {
        renderProducts(products, (e) => {});
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
  // SEPET İKONU YANINDAKİ MİKTARI RENDER ET.
});
