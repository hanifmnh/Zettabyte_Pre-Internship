const users = [
	{
		firstName: 'Scott',
		lastName: 'McTominay',
		dateOfBirth: '1992-08-10',
		address: [
			{
				street: 'Jl. Merdeka No. 10',
				village: 'Cikini',
				subdistrict: 'Menteng',
				city: 'Jakarta Pusat',
				province: 'DKI Jakarta',
				postalCode: '10110',
			},
		],
	},
	{
		firstName: 'Marcus',
		lastName: 'Rashford',
		dateOfBirth: '1988-03-25',
		address: [
			{
				street: 'Jl. Asia Afrika No. 25',
				village: 'Braga',
				subdistrict: 'Sumur Bandung',
				city: 'Bandung',
				province: 'Jawa Barat',
				postalCode: '40111',
			},
			{
				street: 'Jl. Kaliurang Km. 5',
				village: 'Ngaglik',
				subdistrict: 'Mlati',
				city: 'Sleman',
				province: 'DI Yogyakarta',
				postalCode: '55581',
			},
			{
				street: 'Jl. Kebon Kacang No. 12',
				village: 'Kebon Melati',
				subdistrict: 'Tanah Abang',
				city: 'Jakarta Pusat',
				province: 'DKI Jakarta',
				postalCode: '10230',
			},
		],
	},
	{
		firstName: 'Alejandro',
		lastName: 'Garnacho',
		dateOfBirth: '1995-12-18',
		address: [
			{
				street: 'Jl. Cipete Raya No. 15',
				village: 'Cipete',
				subdistrict: 'Kebayoran Baru',
				city: 'Jakarta Selatan',
				province: 'DKI Jakarta',
				postalCode: '12110',
			},
		],
	},
	{
		firstName: 'Bruno',
		lastName: 'Fernandes',
		dateOfBirth: '1990-06-30',
		address: [
			{
				street: 'Jl. Pahlawan No. 8',
				village: 'Sukapura',
				subdistrict: 'Kota Baru',
				city: 'Bekasi',
				province: 'Jawa Barat',
				postalCode: '17131',
			},
		],
	},
	{
		firstName: 'André',
		lastName: 'Onana',
		dateOfBirth: '1987-09-05',
		address: [
			{
				street: 'Jl. Raya Bogor No. 25',
				village: 'Cibinong',
				subdistrict: 'Cibinong',
				city: 'Bogor',
				province: 'Jawa Barat',
				postalCode: '16912',
			},
		],
	},
	{
		firstName: 'Harry',
		lastName: 'Maguire',
		dateOfBirth: '1993-02-14',
		address: [
			{
				street: 'Jl. Diponegoro No. 15',
				village: 'Babakan',
				subdistrict: 'Paledang',
				city: 'Bogor',
				province: 'Jawa Barat',
				postalCode: '16122',
			},
			{
				street: 'Jl. Jendral Sudirman No. 30',
				village: 'Kotabaru',
				subdistrict: 'Gambir',
				city: 'Jakarta Pusat',
				province: 'DKI Jakarta',
				postalCode: '10110',
			},
		],
	},
	{
		firstName: 'Victor',
		lastName: 'Lindelöf',
		dateOfBirth: '1984-07-20',
		address: [
			{
				street: 'Jl. Gatot Subroto No. 12',
				village: 'Margacinta',
				subdistrict: 'Ciwastra',
				city: 'Bandung',
				province: 'Jawa Barat',
				postalCode: '40525',
			},
		],
	},
	{
		firstName: 'Lisandro',
		lastName: 'Martínez',
		dateOfBirth: '1996-11-28',
		address: [
			{
				street: 'Jl. Pramuka No. 50',
				village: 'Paseban',
				subdistrict: 'Senen',
				city: 'Jakarta Pusat',
				province: 'DKI Jakarta',
				postalCode: '10420',
			},
		],
	},
	{
		firstName: 'Raphaël',
		lastName: 'Varane',
		dateOfBirth: '1991-04-03',
		address: [
			{
				street: 'Jl. Raya Pondok Gede No. 25',
				village: 'Pondok Gede',
				subdistrict: 'Pondok Melati',
				city: 'Bekasi',
				province: 'Jawa Barat',
				postalCode: '17413',
			},
			{
				street: 'Jl. Kaliurang Km. 10',
				village: 'Tirtoadi',
				subdistrict: 'Mergangsan',
				city: 'Yogyakarta',
				province: 'DI Yogyakarta',
				postalCode: '55141',
			},
		],
	},
	{
		firstName: 'Kobbie',
		lastName: 'Mainoo',
		dateOfBirth: '1961-06-21',
		address: [
			{
				street: 'Jl. Pangeran Diponegoro No. 7',
				village: 'Kartoharjo',
				subdistrict: 'Mergangsan',
				city: 'Yogyakarta',
				province: 'DI Yogyakarta',
				postalCode: '55141',
			},
			{
				street: 'Jl. Veteran No. 5',
				village: 'Citarum',
				subdistrict: 'Bandung Wetan',
				city: 'Bandung',
				province: 'Jawa Barat',
				postalCode: '40114',
			},
		],
	},
];

// Menghapus accents/diacritics marks
function removeDiacritics(str) {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Filter berdasarkan nama
function findName(name) {
	const nameGroup = users.filter((user) => {
		const nameNormalized = removeDiacritics(name);
		const fullName = removeDiacritics(user.firstName + user.lastName);
		return fullName
			.toLowerCase()
			.replace(/([^\w]+|\s+)/g, '')
			.includes(nameNormalized.toLowerCase().replace(/([^\w]+|\s+)/g, ''));
	});
	return nameGroup;
}

// Sorting users
function sortUsers(sortBy, order) {
	if (sortBy === 'birthdate') {
		// Sorting users berdasarkan date of birth
		const sortedUsersByDateOfBirth = users.slice().sort((a, b) => {
			const dateA = new Date(a.dateOfBirth);
			const dateB = new Date(b.dateOfBirth);
			if (order === 'asc') {
				return dateA - dateB;
			} else if (order === 'desc') {
				return dateB - dateA;
			} else {
				console.error('Invalid sorting order. Please use "asc" or "desc".');
				return null;
			}
		});
		return sortedUsersByDateOfBirth;
	} else if (sortBy === 'city') {
		// Sorting users berdasarkan city
		const sortedUsersByCity = users.slice().sort((a, b) => {
			if (order === 'asc') {
				users.forEach((user) => {
					user.address.sort((a, b) => a.city.localeCompare(b.city));
					user.firstCity = user.address[0].city;
				});
				return a.firstCity.localeCompare(b.firstCity);
			} else if (order === 'desc') {
				users.forEach((user) => {
					user.address.sort((a, b) => b.city.localeCompare(a.city));
					user.firstCity = user.address[0].city;
				});
				return b.firstCity.localeCompare(a.firstCity);
			} else {
				console.error("Invalid sort order. Please specify 'asc' or 'desc'.");
				return null;
			}
		});
		return sortedUsersByCity;
	} else {
		console.error('Invalid sorting type. Please use "birthdate" or "city".');
		return null;
	}
}

// Filter berdasarkan jumlah alamat users
function findUserByTotalAddress(totalAddress) {
	const usersWithTotalAddress = users.filter((user) => user.address.length === totalAddress);
	console.log(`User with ${totalAddress} address: ${usersWithTotalAddress.length} users`);
	return usersWithTotalAddress;
}

let resultName = findName('reo');
resultName.forEach((user) => {
	console.log(user);
});

let resultSortedUsersByDateOfBirth = sortUsers('birthdate', 'desc');
resultSortedUsersByDateOfBirth.forEach((user) => {
	console.log(user);
});

let resultSortedUsersByCity = sortUsers('city', 'desc');
resultSortedUsersByCity.forEach((user) => {
	console.log(user);
});

let resultUserByTotalAddress = findUserByTotalAddress(4);
resultUserByTotalAddress.forEach((user) => {
	console.log(user);
});
