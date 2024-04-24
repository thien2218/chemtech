<script lang="ts">
   import { Dialog, Tooltip } from "bits-ui";
   import { classFormatter } from "../utils";
   import type { ChemElement } from "../types";
   import { curElement, query } from "../store";
   import { onDestroy } from "svelte";
   import { searchableProps } from "../assets/data/element-data";

   export let isInGroup: (category: string) => boolean;
   export let element: ChemElement;

   let searchQuery: string;

   const unsubsribe = query.subscribe((val) => {
      searchQuery = val;
   });

   $: isSearched = () => {
      if (searchQuery === "") return true;

      if (searchQuery !== "") {
         for (let prop of searchableProps) {
            if (
               element &&
               typeof element[prop] === "string" &&
               // @ts-ignore
               element[prop].toLowerCase().includes(searchQuery.toLowerCase())
            ) {
               return true;
            }
         }
      }

      return false;
   };

   onDestroy(unsubsribe);
</script>

<Dialog.Trigger
   class="w-full text-start text-white bg-element-group p-1 text-xs cursor-pointer rounded-[0.25rem] hover:scale-110 {classFormatter(
      element.category
   )} {isInGroup(element.category) && isSearched() ? '' : 'opacity-20'}"
   style="grid-column: {element.xpos}; grid-row: {element.ypos}; transition: transform 0.4s ease, opacity 0.2s ease;"
   on:click={() => curElement.set(element)}
>
   <Tooltip.Trigger asChild let:builder>
      <div class="leading-[1.1]" use:builder.action {...builder}>
         <div class="flex justify-between gap-1.5">
            <span>{element.number}</span>
            <span class="text-[0.625rem] truncate">{element.name}</span>
         </div>

         <h1 class="text-[1.75rem] leading-tight font-bold text-center my-0.5">
            {element.symbol}
         </h1>

         <span>{element.atomic_mass.toFixed(2)}</span>
      </div>
   </Tooltip.Trigger>
</Dialog.Trigger>
