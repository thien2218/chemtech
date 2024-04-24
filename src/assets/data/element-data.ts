import type { ElementField } from "../../types";

export const mapper: {
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

export const subshells: {
   name: "s" | "p" | "d" | "f";
   shells: number[];
   mt: string;
   color: string;
}[] = [
   {
      name: "s",
      shells: [7, 6, 5, 4, 3, 2, 1],
      mt: "0.75rem",
      color: "#004c52"
   },
   {
      name: "p",
      shells: [7, 6, 5, 4, 3, 2],
      mt: "0",
      color: "#3b5800"
   },
   {
      name: "d",
      shells: [6, 5, 4, 3],
      mt: "0.25rem",
      color: "#5f003f"
   },
   {
      name: "f",
      shells: [5, 4],
      mt: "0.5rem",
      color: "#0020a8"
   }
];

export const subshellMap = { s: [1, 0], p: [3, 2], d: [5, 8], f: [7, 18] };
