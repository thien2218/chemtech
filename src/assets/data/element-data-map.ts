import type { ChemElement } from "../../types";

const mapper: {
	title: string;
	fields: (keyof ChemElement)[];
}[] = [
	{
		title: "Overview",
		fields: ["name", "summary", "discovered_by", "appearance", "shells"],
	},
	{
		title: "Properties",
		fields: [
			"number",
			"atomic_mass",
			"density",
			"phase",
			"boil",
			"melt",
			"molar_heat",
			"period",
			"group",
			"spectral_img",
		],
	},
	{
		title: "Atomic Properties",
		fields: ["electron_configuration", "electron_configuration_semantic"],
	},
	{
		title: "Reactivity",
		fields: ["electronegativity_pauling", "electron_affinity"],
	},
];

export default mapper;
