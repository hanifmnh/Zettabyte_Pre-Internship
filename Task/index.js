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

	let discountAmount = (book.price * book.discount) / 100;
	let priceAfterDiscount = book.price - discountAmount;

	for (let amount = 0; amount < amountPurchased; amount++) {
		if (amount === amountStock) {
			break;
		}
		booksPurchased += priceAfterDiscount;
	}

	let remainingStock = amountStock - amountPurchased;

	let taxAmount = (booksPurchased * tax) / 100;
	let priceFinal = booksPurchased + taxAmount;

	console.log('Title\t\t\t:', book.title);
	console.log('Price\t\t\t:', book.price);
	console.log('Stock\t\t\t:', amountStock);

	console.log('\nDiscount\t\t:', book.discount, '%');
	console.log('Amount of discount\t:', discountAmount);
	console.log('Price after discount\t:', priceAfterDiscount);

	console.log('\nAmount Purchased\t:', amountPurchased, 'book');
	console.log('Total price\t\t:', booksPurchased);

	console.log('\nTax\t\t\t:', tax, '%');
	console.log('Amount of tax\t\t:', taxAmount);
	console.log('Price after tax\t\t:', priceFinal);

	console.log('\nTotal Amount of Payment\t:', priceFinal);

	console.log('\nCan this book still be purchased?');
	if (amountPurchased >= amountStock) {
		console.log('No, this book is currently sold and cannot be purchased again');
	} else {
		console.log('Yes, this book can be purchased again');
	}
	console.log('Remaining stock\t:', remainingStock);

	console.log(`\nBook credit for ${creditDuration} month details:`);
	const currentDate = new Date();
	const monthlyPayment = priceFinal / creditDuration;
	const paymentSchedule = Array.from({ length: creditDuration }, (_, inPaymentSchedule) => {
		const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + inPaymentSchedule + 1, currentDate.getDate());
		return { 'Due date': dueDate.toDateString(), 'Amount of payment per month': monthlyPayment };
	});

	return paymentSchedule;
}

const result = purchaseBook(book1, 100, 5, 2);
console.log(result);
