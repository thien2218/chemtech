import type { ElementField } from "../../types";

const mapper: {
   title: string;
   fields: ElementField[];
   transform?: (value: any) => string;
}[] = [
   {
      title: "Overview",
      fields: [
         { property: "name", label: "Name" },
         { property: "summary", label: "Summary" },
         { property: "discovered_by", label: "Discovered By" },
         { property: "named_by", label: "Named By" },
         { property: "appearance", label: "Appearance" },
         {
            property: "shells",
            label: "Electron Shells",
            transform: (value) => value.join(" ")
         }
      ]
   },
   {
      title: "Properties",
      fields: [
         { property: "number", label: "Atomic Number" },
         {
            property: "atomic_mass",
            label: "Atomic Mass",
            transform: (value) => `${value.toFixed(2)} (g/mol)`
         },
         {
            property: "density",
            label: "Density",
            transform: (value) => `${value.toFixed(2)} (g/cm³)`
         },
         { property: "phase", label: "Phase" },
         {
            property: "boil",
            label: "Boiling Point",
            transform: (value) => {
               const temp = parseFloat(value.toFixed(2));
               return `${temp} K = ${((temp * 9) / 5 + 32).toFixed(2)} °F = ${(
                  temp - 273.15
               ).toFixed(2)} °C`;
            }
         },
         {
            property: "melt",
            label: "Melting Point",
            transform: (value) => {
               const temp = parseFloat(value.toFixed(2));
               return `${temp} K = ${((temp * 9) / 5 + 32).toFixed(2)} °F = ${(
                  temp - 273.15
               ).toFixed(2)} °C`;
            }
         },
         {
            property: "molar_heat",
            label: "Molar Heat",
            transform: (value) => `${value} (J/g·K)`
         },
         { property: "group", label: "Group" },
         { property: "period", label: "Period" },
         { property: "spectral_img", label: "Emmission Spectrum" }
      ]
   },
   {
      title: "Atomic Properties",
      fields: [
         {
            property: "electron_configuration",
            label: "Electron Configuration"
         },
         {
            property: "electron_configuration_semantic",
            label: "Electron Configuration Semantic"
         }
      ]
   },
   {
      title: "Reactivity",
      fields: [
         {
            property: "electronegativity_pauling",
            label: "Electronegativity (Pauling)"
         },
         { property: "electron_affinity", label: "Electron Affinity" }
      ]
   }
];

export default mapper;
