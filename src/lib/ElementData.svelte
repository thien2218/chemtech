<script lang="ts">
   import { Separator } from "bits-ui";
   import { isUrl } from "../utils";
   import type { ChemElement, ElementField } from "../types";

   export let title: string;
   export let fields: ElementField[];
   export let element: ChemElement;

   const renderField = (field: ElementField): string => {
      const elementField = element[field.property];
      const transform = field.transform;

      if (typeof elementField === "string" && isUrl(elementField)) {
         return `
            <a
               href=${elementField}
               target="_blank"
               rel="noopener noreferrer"
               class="block mt-2 text-sm cursor-pointer hover:underline"
            >
               ${elementField}
            </a>
         `;
      }

      return `
         <p id="element-${title}" class="mt-2 text-sm leading-normal">
            ${!elementField ? "--" : transform ? transform(elementField) : elementField}
         </p>
      `;
   };
</script>

<div class="px-3 py-4 bg-gray-700">
   <h3>{title}</h3>
</div>

<ul class="py-4 bg-gray-900">
   {#each fields as field, idx (field)}
      <li class="px-3 mb-5">
         <label for="element-{field}" class="uppercase opacity-70 text-xs">
            {field.label}:
         </label>

         {@html renderField(field)}
      </li>

      {#if idx < fields.length - 1}
         <Separator.Root
            orientation="horizontal"
            class="bg-gray-600 mb-4 h-[1px]"
         />
      {/if}
   {/each}
</ul>
