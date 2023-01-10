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
	var alg1 = algorithm('crypto1');
	var alg2 = algorithm('crypto2');

	window.summaryWindow.show();

	console.log(alg1);
	console.log(alg2);
};

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', () => { getCrypted() });