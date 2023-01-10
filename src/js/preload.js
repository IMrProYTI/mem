// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

// Crypto
const crypto = require('crypto');

function useHash(algorithm, value) {
	return crypto.createHash(algorithm).update(value).digest('hex');
};

contextBridge.exposeInMainWorld('myCrypto', {
	'md4': (value) => useHash('md4', value),
	'md5': (value) => useHash('md5', value),
	'sha1': (value) => useHash('sha1', value),
	'sha224': (value) => useHash('sha224', value),
	'sha256': (value) => useHash('sha256', value),
	'sha384': (value) => useHash('sha384', value),
	'sha512': (value) => useHash('sha512', value)
});

// Pass
function showSummary() {
	ipcRenderer.send('show-summary');
};

function hideSummary() {
	ipcRenderer.send('hide-summary');
};

contextBridge.exposeInMainWorld('summaryWindow', {
	'show': () => showSummary(),
	'hide': () => hideSummary()
});