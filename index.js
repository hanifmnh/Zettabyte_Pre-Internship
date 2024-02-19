// 1st Function
function combineElements(arr) {
    return arr.join(' ');
}
// Test Case
const case1Elements = [1, 'data', '3', 'result'];
const case2Elements = ['Bejo', 'has', '4', 'sport', 'car'];
console.log(combineElements(case1Elements));
console.log(combineElements(case2Elements));
// 2nd Function
function sumItems(arr) {
    let result;
    if (arr.length === 0) {
        result = 'invalid input';
    }
    else if (arr.every((item) => typeof item === 'number')) {
        const initialValue = 0;
        result = arr.reduce((acc, currentValue) => Number(acc) + Number(currentValue), initialValue);
    }
    else if (arr.every((item) => typeof item === 'string')) {
        result = arr.join(' ');
    }
    else {
        result = 'invalid input';
    }
    return result;
}
// Test Case
const case1Items = [1, 2, 3, 4];
const case2Items = ['the', 'dolphins', 'of', 'zettacamp'];
const case3Items = ['Bejo', 'has', 4, 'sport', 'car'];
const caseEmptyArrays = [];
console.log(sumItems(case1Items));
console.log(sumItems(case2Items));
console.log(sumItems(case3Items));
console.log(sumItems(caseEmptyArrays));
function transformProduct(product) {
    if (product.quantity > product.inStock) {
        return {
            name: product.name,
            buyable: false,
        };
    }
    else {
        return {
            name: product.name,
            buyable: true,
            totalPrice: product.quantity * product.price,
        };
    }
}
// Test Case
const case1Product = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 5,
    inStock: 100,
    price: 5000,
};
const case2Product = {
    name: 'Sari Roti',
    vendor: 'Toko Kue Sebelah',
    quantity: 2,
    inStock: 0,
    price: 10000,
};
console.log(transformProduct(case1Product));
console.log(transformProduct(case2Product));
