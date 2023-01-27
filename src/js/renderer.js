function algorithm(name) {
	var selectedRadio;
	const radios = document.getElementsByName(name);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked == true) {
			selectedRadio = radios[i].value;
			break;
		};
	};
	return selectedRadio;
};

function getCrypted(value) {
	const alg = document.getElementById('alg');

	switch (algorithm('crypto')) {
		case 'md4':
			alg.innerHTML = `md4: <code>${window.myCrypto.md4(value)}</code>`;
			break;

		case 'md5':
			alg.innerHTML = `md5: <code>${window.myCrypto.md5(value)}</code>`;
			break;

		case 'sha1':
			alg.innerHTML = `sha1: <code>${window.myCrypto.sha1(value)}</code>`;
			break;

		case 'sha224':
			alg.innerHTML = `sha224: <code>${window.myCrypto.sha224(value)}</code>`;
			break;

		case 'sha256':
			alg.innerHTML = `sha256: <code>${window.myCrypto.sha256(value)}</code>`;
			break;

		case 'sha384':
			alg.innerHTML = `sha384: <code>${window.myCrypto.sha384(value)}</code>`;
			break;

		case 'sha512':
			alg.innerHTML = `sha512: <code>${window.myCrypto.sha512(value)}</code>`;
			break;
	
		default:
			break;
	};
};

const input = document.getElementById('input');

getCrypted(input.value);

input.addEventListener('input', () => { getCrypted(input.value) });

const inputs = document.getElementsByTagName('input');
for (let i = 1; i < inputs.length; i++) {
	inputs[i].addEventListener('click', () => { getCrypted(input.value); });
};