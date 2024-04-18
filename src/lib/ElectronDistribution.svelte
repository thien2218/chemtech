<script lang="ts">
   import { curElement } from "../store";
   import ElectronSpinIcon from "../assets/icons/ElectronSpinIcon.svelte";

   const blocks: {
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

   const blockMap = { s: 0, p: 2, d: 8, f: 18 };
</script>

<div class="flex gap-4 justify-center">
   {#each blocks as { name, shells, mt, color }, idx (name)}
      <div style="margin-top: {mt};">
         {#each shells as shell (shell)}
            <div class="mb-1 flex items-center gap-1">
               <span class="font-sm w-5">{shell}{name}</span>

               {#each Array(1 + idx * 2) as _, i}
                  <div
                     class="w-[18px] h-6 flex items-center justify-center"
                     style="background-color: {color};"
                  >
                     {#if $curElement}
                        <div class="w-1.5 h-3 flex items-center">
                           {#if i + 1 + blockMap[name] <= $curElement.shells[shell - 1]}
                              <ElectronSpinIcon />
                           {/if}
                        </div>
                        <div class="w-1.5 h-3 rotate-180 flex items-center">
                           {#if 1 + idx * 2 + i + 1 + blockMap[name] <= $curElement.shells[shell - 1]}
                              <ElectronSpinIcon />
                           {/if}
                        </div>
                     {/if}
                  </div>
               {/each}
            </div>
         {/each}
      </div>
   {/each}
</div>

{#if $curElement}
   <div class="my-4">
      <p>
         block: {$curElement.block}
      </p>
   </div>
{/if}
