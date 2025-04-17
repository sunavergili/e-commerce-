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
  // eğer ürün var ise
  if (product) {
    // bu ürünün sepete önceden eklendi mi diye kontrol et
    const exitingItem = cart.find((item) => item.id === productId);
    if (exitingItem) {
      // SEPETTEKİ ÜRÜN MİKTARINI BİR ARTTUR.
      exitingItem.quantity++;
    } else {
      // sepete eklenecek ürün için bir obje oluştur.
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      };
      // sepet dizisine oluşturulan elemanı ekle.
      cart.push(cartItem);
    }
  }
  // sepet dizisini local storage ı kaydet.
  saveToLocalStorage(cart);
  // add to cart butonunun içeriğini güncelle
  e.target.innerText = "Added";
  // 2 sn sonra addto cart un içeriğini eski haline çevir.

  setTimeout(() => {
    e.target.innerText = "Add to cart";
  }, 2000);
};
export { addToCart };
