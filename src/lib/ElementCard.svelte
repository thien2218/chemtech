<script lang="ts">
   import { Dialog } from "bits-ui";
   import { Canvas } from "@threlte/core";
   import { fade } from "svelte/transition";
   import type { ChemElement } from "../types";
   import CardHeader from "./CardHeader.svelte";
   import { mapper } from "../assets/data/element-data";
   import ElementData from "./ElementData.svelte";
   import { curElement } from "../store";
   import { onDestroy } from "svelte";
   import Scene from "./Scene.svelte";
   import ElectronDistribution from "./ElectronDistribution.svelte";

   let element: ChemElement;

   const unsubsribe = curElement.subscribe((value) => {
      element = value as ChemElement;
   });

   onDestroy(unsubsribe);
</script>

<Dialog.Content
   transition={fade}
   transitionConfig={{ duration: 200 }}
   class="fixed flex gap-4 left-1/2 top-0 z-50 -translate-x-1/2 bg-background shadow-popover outline-none text-white w-[90%] max-w-[70rem] h-screen"
>
   <div class="flex-1 max-h-screen overflow-y-auto">
      <CardHeader {element} />

      {#each mapper as { title, fields }}
         <ElementData {title} {fields} {element} />
      {/each}
   </div>

   <div class="flex-1 h-full overflow-y-auto">
      <div class="h-full min-h-[44rem]">
         <div class="w-full h-1/2 bg-gray-950">
            <Canvas>
               <Scene model={element.bohr_model_3d} />
            </Canvas>
         </div>

         <div class="w-full h-1/2 bg-gray-900 p-6">
            <ElectronDistribution />
         </div>
      </div>
   </div>
</Dialog.Content>
