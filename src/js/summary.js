const data = {
	'md4': ['md4', 128, 'No Data', 512, 'No Data', 32, 3],
	'md5': ['md5', 128, 'No Data', 512, 'No Data', 32, 4],
	'sha1': ['sha1', 160, 160, 512, '2^64 - 1', 32, 80],
	'sha224': ['sha224', 224, 256, 512, '2^64 - 1', 32, 64],
	'sha256': ['sha256', 256, 256, 512, '2^64 - 1', 32, 64],
	'sha384': ['sha384', 384, 512, 1024, '2^128 - 1', 64, 80],
	'sha512': ['sha512', 512, 512, 1024, '2^128 - 1', 64, 80]
};

function parseTable(algorithm1, algorithm2) {
	
};

const algs1 = document.getElementsByClassName('alg1');
const algs2 = document.getElementsByClassName('alg2');

for (var i = 0; i < algs1.length; i++)
	algs1[i].innerHTML = data[`${'md4'}`][i]

for (var i = 0; i < algs2.length; i++)
	algs2[i].innerHTML = data[`${'md5'}`][i]