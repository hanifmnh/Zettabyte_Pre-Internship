const songs = [
	{ title: 'Cartel', artist: 'Whisnu Santika', genre: 'Electronic', duration: '00:03:02' },
	{ title: 'Sahara', artist: 'Whisnu Santika', genre: 'Electronic', duration: '00:02:30' },
	{ title: 'Tequila', artist: 'Whisnu Santika', genre: 'Electronic', duration: '00:03:23' },
	{ title: 'What Makes You Beautiful', artist: 'One Direction', genre: 'Pop', duration: '00:03:27' },
	{ title: 'Night Changes', artist: 'One Direction', genre: 'Pop', duration: '00:03:46' },
	{ title: 'Drag Me Down', artist: 'One Direction', genre: 'Pop', duration: '00:03:12' },
	{ title: 'Attention', artist: 'Charlie Puth', genre: 'Pop', duration: '00:03:31' },
	{ title: 'One Call Away', artist: 'Charlie Puth', genre: 'Pop', duration: '00:03:12' },
	{ title: 'Cheating on You', artist: 'Charlie Puth', genre: 'Pop', duration: '00:03:17' },
	{ title: 'Drown', artist: 'Bring Me The Horizon', genre: 'Rock', duration: '00:03:42' },
	{ title: 'Kingslayer', artist: 'Bring Me The Horizon', genre: 'Rock', duration: '00:03:40' },
	{ title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop', duration: '00:03:53' },
	{ title: 'Old Town Road', artist: 'Lil Nas X', genre: 'Country Rap', duration: '00:03:32' },
	{ title: 'How You Like That', artist: 'Blackpink', genre: 'K-pop', duration: '00:03:01' },
	{ title: 'Kill This Love', artist: 'Blackpink', genre: 'K-pop', duration: '00:03:09' },
	{ title: 'GODS', artist: 'NewJeans', genre: 'K-pop', duration: '00:03:40' },
	{ title: 'Super Shy', artist: 'NewJeans', genre: 'K-pop', duration: '00:02:34' },
	{ title: 'LATHI', artist: 'Weird Genius', genre: 'Electronic', duration: '00:03:07' },
	{ title: 'Catalyst', artist: 'Weird Genius', genre: 'Electronic', duration: '00:03:16' },
	{ title: 'A Sky Full of Stars', artist: 'Coldplay', genre: 'Alternative Rock', duration: '00:04:27' },
	{ title: 'Fix You', artist: 'Coldplay', genre: 'Alternative Rock', duration: '00:04:55' },
	{ title: 'Till It Hurts', artist: 'Yellow Claw', genre: 'Electronic', duration: '00:03:09' },

	// Lagu yang berdurasi lebih dari 10 menit
	{ title: 'Echoes', artist: 'Pink Floyd', genre: 'Progressive Rock', duration: '00:23:31' },
	{ title: 'Dogs', artist: 'Pink Floyd', genre: 'Progressive Rock', duration: '00:17:05' },
	{ title: 'Atom Heart Mother', artist: 'Pink Floyd', genre: 'Progressive Rock', duration: '00:23:44' },
];

// Filter lagu berdasarkan artis
function groupByArtist(artistName) {
	const artistGroup = songs.filter((song) =>
		song.artist
			.toLowerCase()
			.replace(/([^\w]+|\s+)/g, '')
			.includes(artistName.toLowerCase().replace(/([^\w]+|\s+)/g, ''))
	);
	return artistGroup;
}

// Filter lagu berdasarkan genre
function groupByGenre(genreName) {
	const genreGroup = songs.filter((song) =>
		song.genre
			.toLowerCase()
			.replace(/([^\w]+|\s+)/g, '')
			.includes(genreName.toLowerCase().replace(/([^\w]+|\s+)/g, ''))
	);
	return genreGroup;
}

// Konversi durasi menjadi detik
function durationToSeconds(duration) {
	const [hours, minutes, seconds] = duration.split(':').map(Number);
	return hours * 3600 + minutes * 60 + seconds;
}

function createPlaylist() {
	const oneHourInSeconds = 3600;
	let totalDuration = 0;
	let groupedSongs = [];

	// Mengacak susunan lagu
	const shuffledSongs = songs.sort(() => Math.random() - 0.5);

	shuffledSongs.forEach((song) => {
		const durationInSeconds = durationToSeconds(song.duration);

		if (totalDuration + durationInSeconds <= oneHourInSeconds) {
			groupedSongs.push(song);
			totalDuration += durationInSeconds;
		} else {
			return;
		}
	});

	// Konversi total durasi ke jam, menit, detik
	const hours = Math.floor(totalDuration / 3600);
	const minutes = Math.floor((totalDuration % 3600) / 60);
	const seconds = totalDuration % 60;

	return { groupedSongs, totalDuration: { hours, minutes, seconds } };
}

console.log('Group By Artist:');
console.log(groupByArtist('nk'));

console.log('\nGroup By Genre:');
console.log(groupByGenre('kpop'));

const playlist = createPlaylist();
const { hours, minutes, seconds } = playlist.totalDuration;

console.log('\nPlaylist:');
console.log(playlist.groupedSongs);
console.log('Total Duration:', hours, 'hours,', minutes, 'minutes, and', seconds, 'seconds');
