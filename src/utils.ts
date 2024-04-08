export const ELEMENT_GROUPS = [
	"Alkali metal",
	"Alkaline earth metal",
	"Transition metal",
	"Post-transition metal",
	"Metalloid",
	"Polyatomic nonmetal",
	"Diatomic nonmetal",
	"Noble gas",
	"Lanthanide",
	"Actinide",
	"Unknown",
];

export const classFormatter = (category: string) => {
	const className = category.toLowerCase().split(" ").join("-");
	const classNameWithoutComma = className.split(",")[0];
	return classNameWithoutComma;
};

export const isUrl = (url: string) => {
	const pattern = new RegExp(
		"(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})",
		"g"
	);
	return !!pattern.test(url);
};
