import { saveToLocalStorage, getFromLocalStorage } from "./helper.js";
let cart = getFromLocalStorage();
console.log(cart);
const addToCart = (e, products) => {
  // add-to-cart butonların tıklandığında butonları birbirinden ayırt etmek için bunlara data-id
  // ile birer uniq id atadık.bu sayede bu butonların birbirinden farklı olmasını sağladık.
  // tıklanan elemanın ıd sine eriş.
  const productId = +e.target.dataset.id;
 
  //    Id si bilinen ürünü product dizisi içinden bul
  const product = products.find((product) => product.id === productId);
  console.log(product);
  saveToLocalStorage(product);
 
};
export { addToCart };
