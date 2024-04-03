export const classFormatter = (category: string) => {
	const className = category.toLowerCase().split(" ").join("-");
	const classNameWithoutComma = className.split(",")[0];
	return classNameWithoutComma;
};
