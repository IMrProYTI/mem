const data = {
	'md4': ['md4', 128, 'No Data', 512, '2^64 - 1', 32, 3],
	'md5': ['md5', 128, 128, 512, '2^64 - 1', 32, 4],
	'sha1': ['sha1', 160, 160, 512, '2^64 - 1', 32, 80],
	'sha224': ['sha224', 224, 256, 512, '2^64 - 1', 32, 64],
	'sha256': ['sha256', 256, 256, 512, '2^64 - 1', 32, 64],
	'sha384': ['sha384', 384, 512, 1024, '2^128 - 1', 64, 80],
	'sha512': ['sha512', 512, 512, 1024, '2^128 - 1', 64, 80]
};

document.addEventListener('DOMContentLoaded', async () => {
	var algorithms = await window.summaryWindow.get();

	const algs1 = document.getElementsByClassName('alg1');
	const algs2 = document.getElementsByClassName('alg2');
	const algs3 = document.getElementsByClassName('alg3');

	for (var i = 0; !(i >= algs1.length || i >= algs2.length || i >= algs3.length); i++) {
		var alg1 = data[`${algorithms['algorithm1']}`][i];
		var alg2 = data[`${algorithms['algorithm2']}`][i];

		algs1[i].innerHTML = alg1;
		algs2[i].innerHTML = alg2;

		if (i == 0) {
			algs3[i].innerHTML = 'Сравнение'
		}
		else {
			if (i == 4) {
				if (alg1 == '2^64 - 1')
					alg1 = Math.pow(2, 64) - 1;
				else
					alg1 = Math.pow(2, 128) - 1;

				if (alg2 == '2^64 - 1')
					alg2 = Math.pow(2, 64) - 1;
				else
					alg2 = Math.pow(2, 128) - 1;
			};

			if (alg1 > alg2) {
				let out;
				if ((alg1 / alg2) < 100)
					out = Math.round(alg1 / alg2 * 100) / 100;
				else
					out = `~${Math.round(alg1 / alg2 / Math.pow(10, 16)) / 100} * 10^18`;

				algs3[i].innerHTML = `Больше в ${out} раз(а)`;
			};

			if (alg1 < alg2) {
				let out;
				if ((alg2 / alg1) < 100)
					out = Math.round(alg2 / alg1 * 100) / 100;
				else
					out = `~${Math.round(alg2 / alg1 / Math.pow(10, 16)) / 100} * 10^18`;

				algs3[i].innerHTML = `Меньше в ${out} раз(а)`;
			};

			if (alg1 == alg2)
				algs3[i].innerHTML = `Одинаковые`;
		};

		document.getElementById('exit-button').addEventListener('click', () => window.summaryWindow.hide());
	};
});