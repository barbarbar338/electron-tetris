const SI_PREFIX_SYMBOL = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];

export const abbreviate = (number: number): string => {
	const symbolIndex = (Math.log10(Math.abs(number)) / 3) | 0;
	if (symbolIndex === 0) return number.toString();
	const scaled = number / Math.pow(10, symbolIndex * 3);
	return (
		scaled.toFixed(1).replace(/(?:\.0+|0+)$/, "") +
		SI_PREFIX_SYMBOL[symbolIndex]
	);
};
