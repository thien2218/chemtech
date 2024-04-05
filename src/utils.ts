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
