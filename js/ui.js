

import fetchProducts from "./api.js";
// ui elemanlarının tutulduğu obje
const elements = {
  menuIcon: document.querySelector("#menu-icon"),
  menu: document.querySelector(".navbar"),
  productList: document.querySelector("#product-list"),
  cartContainer: document.querySelector("#cart-items"),
  
};

// ürün cartlarını render eden fonksiyon
const renderProducts = (products, addToCartFunction) => {
  // product dizisinin dön ve bir html dizisi oluştur
  const productsHtml = products
    .map(
      (product) => ` <div class="product">
        
          <img
            src="${product.image}"
            alt="product-image"
            class="product-image"
          />
         
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">${product.price}</p>
             <a class="add-to-cart" data-id='${product.id}'>Add to cart</a>
          </div>
        </div>`
    )
    .join("");
    // oluşturulan html i arayüze aktar
  elements.productList.innerHTML = productsHtml;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  // querySelectorAll metodu erişilen elemanlara bir dizi halinde döndürür.Bu elemana direk addeventlistener
  // ekleyemeyiz.bunun için dizi içindeki elemanlara teker teker erişiriz.
  for (let i = 0; i < addToCartButtons.length; i++) {
    // dizinin içindeki butonlara teker teker eriş.
    const addToCartButton = addToCartButtons[i];
// erişilen elemana bie click olayı ekler
addToCartButton.addEventListener ("click",addToCartFunction);
  }
 };
//  sepetteki ürünleri renderlayan fonksiyon














export { elements, renderProducts };
