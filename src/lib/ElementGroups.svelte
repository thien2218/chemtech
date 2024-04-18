<script lang="ts">
   import { Button } from "bits-ui";
   import { ELEMENT_GROUPS, classFormatter } from "../utils";
   import { curGroup, setCurGroup } from "../store";
</script>

<div
   class="col-start-3 col-span-10 row-span-3 grid grid-cols-4 gap-x-3 gap-y-2 px-7 py-2"
>
   {#each ELEMENT_GROUPS as group}
      <div class="font-bold">
         <Button.Root
            class="border-none text-sm p-1.5 rounded-lg cursor-pointer transition-[background-color] duration-300 hover:bg-white/20 {$curGroup ===
            classFormatter(group)
               ? 'active'
               : ''}"
            on:click={() => setCurGroup(group)}
         >
            <div
               class="w-5 h-3.5 mb-3 rounded-[0.25rem] bg-element-group {classFormatter(
                  group
               )}"
            ></div>
            {group}
         </Button.Root>
      </div>
   {/each}
</div>

<style>
</style>
