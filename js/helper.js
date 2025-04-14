const saveToLocalStorage = (cart) => {
  // dışarıdan verilen elemanı Json .stringify ile ile stringe çevir ve localstoarage e set ekle.
  localStorage.setItem("cart", JSON.stringify(cart));
};
// local storage dan eleman alan fonksiyon

const getFromLocalStorage = () => {
  // local storagetaki cart key ine sahip elemanları local storage dan al
  const strData = localStorage.getItem("cart");
  // Eğer localstorage'da veri varsa bunu JSON.parse ile dönüştür ve return et ama yoksa boş bir dizi return et

  return strData ? JSON.parse(strData) : [];
};
export { saveToLocalStorage ,getFromLocalStorage };
