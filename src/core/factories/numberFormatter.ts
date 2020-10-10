export default function numberFormatter(number: number, digits: number) {
	const si = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "Million" },
		{ value: 1e9, symbol: "Billion" },
		{ value: 1e12, symbol: "Trillion" },
		{ value: 1e15, symbol: "Quadrillion" },
		{ value: 1e18, symbol: "Quintillion" },
	]
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
	let sw
	for (sw = si.length - 1; sw > 0; sw--) {
		if (number >= si[sw].value) {
			break
		}
	}
	return `${(number / si[sw].value).toFixed(digits).replace(rx, "$1")} ${si[sw].symbol}`
}
