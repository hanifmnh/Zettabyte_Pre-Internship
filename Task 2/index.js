let favoriteBook1 = 'Kimetsu no Yaiba';
const favoriteBook2 = 'Solo Leveling';

let priceFavoriteBook1 = 45000;
let priceFavoriteBook2 = 55000;

let highestPrice = priceFavoriteBook1 > priceFavoriteBook2 ? priceFavoriteBook1 : priceFavoriteBook2;
let averagePrice = (priceFavoriteBook1 + priceFavoriteBook2) / 2;
let priceCategory = averagePrice > 500000 ? 'Expensive' : 'Cheap';

console.log('Highest Price :', highestPrice);
console.log('Average Price :', averagePrice);
console.log('Price Category:', priceCategory);
