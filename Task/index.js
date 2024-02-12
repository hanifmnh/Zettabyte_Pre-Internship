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

function purchaseBook(book) {
	const tax = 10;

	let discountAmount = (book.price * book.discount) / 100;
	let priceAfterDiscount = book.price - discountAmount;
	let taxAmount = (priceAfterDiscount * tax) / 100;
	let priceFinal = priceAfterDiscount - taxAmount;

	console.log(book.title);
	console.log('amount of discount\t=', discountAmount);
	console.log('price after discount\t=', priceAfterDiscount);
	console.log('amount of tax\t\t=', taxAmount);
	console.log('price after tax\t\t=', priceFinal, '\n');

	return priceFinal;
}

purchaseBook(book1);
purchaseBook(book2);
