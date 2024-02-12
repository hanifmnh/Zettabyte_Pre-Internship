const book1 = {
	title: 'Solo Leveling',
	price: 80000,
	discount: 20,
};

const book2 = {
	title: 'Mushoku Tensei',
	price: 70000,
	discount: 10,
};

function purchaseBook(book, amountStock, amountPurchased) {
	const tax = 10;
	let booksPurchased = 0;

	for (let i = 0; i < amountPurchased; i++) {
		if (i === amountStock) {
			break;
		}
		booksPurchased += book.price;
	}

	let discountAmount = (book.price * book.discount) / 100;
	let priceAfterDiscount = book.price - discountAmount;
	let taxAmount = (priceAfterDiscount * tax) / 100;
	let priceFinal = priceAfterDiscount - taxAmount;

	console.log(book.title);
	console.log('Total price\t\t:', booksPurchased);
	console.log('Amount of discount\t:', discountAmount);
	console.log('Price after discount\t:', priceAfterDiscount);
	console.log('Amount of tax\t\t:', taxAmount);
	console.log('Price after tax\t\t:', priceFinal);

	if (amountPurchased >= amountStock) {
		console.log('This book is currently sold and cannot be purchased again\n');
	} else {
		console.log('This book can be purchased again\n');
	}

	return priceFinal;
}

purchaseBook(book1, 8, 8);
purchaseBook(book2, 26, 13);
