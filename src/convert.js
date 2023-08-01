export function convert(b) {
	let binary = [];
	let copyBinary = [...b];

	while (copyBinary.length !== 0) {
		binary.push(copyBinary.pop());
	}

	let decimal = 0;
	for (let i = 0; i < binary.length; i++) {
		decimal += binary[i] * Math.pow(2, i);
	}

	return decimal;
}
