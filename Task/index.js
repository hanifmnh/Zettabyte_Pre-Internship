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

function purchaseBook(book, amountStock, amountPurchased, creditDuration) {
	const tax = 10;
	let booksPurchased = 0;
	let purchaseDetails = [];

	for (let i = 0; i < amountPurchased; i++) {
		if (i === amountStock) {
			break;
		}
		booksPurchased += book.price;
	}

	let discountAmount = (booksPurchased * book.discount) / 100;
	let priceAfterDiscount = booksPurchased - discountAmount;
	let taxAmount = (priceAfterDiscount * tax) / 100;
	let priceFinal = priceAfterDiscount - taxAmount;

	purchaseDetails.push(book.title);
	purchaseDetails.push('Total price:', booksPurchased);
	purchaseDetails.push('Amount of discount:', discountAmount);
	purchaseDetails.push('Price after discount:', priceAfterDiscount);
	purchaseDetails.push('Amount of tax:', taxAmount);
	purchaseDetails.push('Price after tax:', priceFinal);

	if (amountPurchased >= amountStock) {
		purchaseDetails.push('This book is currently sold and cannot be purchased again');
	} else {
		purchaseDetails.push('This book can be purchased again');
	}

	// Calculate due dates for each month starting from the next month
	const currentDate = new Date();
	for (let i = 1; i <= creditDuration; i++) {
		const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, currentDate.getDate());
		purchaseDetails.push(`Due date for month ${i}: ${dueDate.toDateString()}`);
	}

	return purchaseDetails;
}

const result = purchaseBook(book1, 200, 150, 6);
console.log(result);
