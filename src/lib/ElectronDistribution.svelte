<script lang="ts">
   import { curElement } from "../store";
   import ElectronSpinIcon from "../assets/icons/ElectronSpinIcon.svelte";
   import { subshellMap, subshells } from "../assets/data/element-data";
   import { onMount } from "svelte";

   let curCell: string;

   const getLastCell = () => {
      if ($curElement) {
         const elConfigList = $curElement.electron_configuration.split(" ");
         const lastElConfig = elConfigList[elConfigList.length - 1];
         const cell =
            (parseInt(lastElConfig.substring(2)) - 1) %
            subshellMap[$curElement.block][0];

         curCell = lastElConfig.substring(0, 2) + cell;
      }
   };

   const setCurCell = (cell: string) => {
      curCell = cell;
   };

   onMount(getLastCell);
</script>

<div class="flex gap-4 justify-center">
   {#each subshells as { name, shells, mt, color } (name)}
      <div style="margin-top: {mt};">
         {#each shells as shell (shell)}
            <div class="mb-1 flex items-center gap-1">
               <span class="font-sm w-5">{shell}{name}</span>

               {#each Array(subshellMap[name][0]) as _, cell}
                  {#if $curElement}
                     <button
                        class="w-[18px] h-6 flex items-center justify-center {`${shell}${name}${cell}` ===
                        curCell
                           ? 'outline outline-white outline-2'
                           : ''}"
                        style="background-color: {color};"
                        on:click={() => setCurCell(`${shell}${name}${cell}`)}
                     >
                        <div class="w-1.5 h-3 flex items-center">
                           {#if cell + 1 + subshellMap[name][1] <= $curElement.shells[shell - 1]}
                              <ElectronSpinIcon />
                           {/if}
                        </div>
                        <div class="w-1.5 h-3 rotate-180 flex items-center">
                           {#if subshellMap[name][0] + cell + 1 + subshellMap[name][1] <= $curElement.shells[shell - 1]}
                              <ElectronSpinIcon />
                           {/if}
                        </div>
                     </button>
                  {/if}
               {/each}
            </div>
         {/each}
      </div>
   {/each}
</div>

{#if $curElement && curCell}
   <div class="my-4">
      <p>
         Block: {$curElement.block}
      </p>
      <p>
         n: {curCell.substring(0, 1)}
      </p>
      <p>
         l: {subshells.findIndex(
            (subshell) => subshell.name === curCell.substring(1, 2)
         )}
      </p>
      <p>
         m: {parseInt(curCell.substring(2)) -
            // @ts-ignore
            parseInt(subshellMap[curCell.substring(1, 2)][0] / 2)}
      </p>
   </div>
{/if}
