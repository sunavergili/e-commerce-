const fetchProducts = async () => {
  try {
    // APİ YR İSTEK AT
    const res = await fetch("../db.json");
    // GELEN VERİYİ JS NESNESİNE DÖNDÜR
    const data = await res.json();
    // VERİYİ FONKSİYON ÇAĞIRILDIĞINDA RETURN ET
    return data;
  } catch (err) {
    alert(`Error: ${err}`);
    // eğer hata var ise boş bir dizi return et
    return [];
  }
};

export default fetchProducts;
