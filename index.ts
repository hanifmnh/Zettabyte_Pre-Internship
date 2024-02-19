// 1st Function
function combineElements(arr: (number | string)[]): string {
	return arr.join(' ');
}

// Test Case
const case1Elements: (number | string)[] = [1, 'data', '3', 'result'];
const case2Elements: (number | string)[] = ['Bejo', 'has', '4', 'sport', 'car'];

console.log(combineElements(case1Elements));
console.log(combineElements(case2Elements));

// 2nd Function
function sumItems(arr: (number | string)[]): number | string {
	let result: any;

	if (arr.length === 0) {
		result = 'invalid input';
	} else if (arr.every((item) => typeof item === 'number')) {
		const initialValue: number = 0;
		result = arr.reduce((acc, currentValue) => Number(acc) + Number(currentValue), initialValue);
	} else if (arr.every((item) => typeof item === 'string')) {
		result = arr.join(' ');
	} else {
		result = 'invalid input';
	}

	return result;
}

// Test Case
const case1Items: (number | string)[] = [1, 2, 3, 4];
const case2Items: (number | string)[] = ['the', 'dolphins', 'of', 'zettacamp'];
const case3Items: (number | string)[] = ['Bejo', 'has', 4, 'sport', 'car'];
const caseEmptyArrays: (number | string)[] = [];

console.log(sumItems(case1Items));
console.log(sumItems(case2Items));
console.log(sumItems(case3Items));
console.log(sumItems(caseEmptyArrays));

// 3rd Function
interface Product {
	name: string;
	vendor: string;
	quantity: number;
	inStock: number;
	price: number;
}

interface SimplifiedProduct {
	name: string;
	buyable: boolean;
	totalPrice?: number;
}

function transformProduct(product: Product): SimplifiedProduct {
	if (product.quantity > product.inStock) {
		return {
			name: product.name,
			buyable: false,
		};
	} else {
		return {
			name: product.name,
			buyable: true,
			totalPrice: product.quantity * product.price,
		};
	}
}

// Test Case
const case1Product: Product = {
	name: 'Coca Cola',
	vendor: 'Coca Cola Company',
	quantity: 5,
	inStock: 100,
	price: 5000,
};

const case2Product: Product = {
	name: 'Sari Roti',
	vendor: 'Toko Kue Sebelah',
	quantity: 2,
	inStock: 0,
	price: 10000,
};

console.log(transformProduct(case1Product));
console.log(transformProduct(case2Product));
