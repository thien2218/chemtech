<script lang="ts">
   export let isInGroup: (category: string) => boolean;
</script>

<div
   class="lanthanide col-start-3 bg-element-group/20 text-element-group flex justify-center items-center rounded-[0.25rem] row-start-6 row-end-6 {isInGroup(
      'lanthanide'
   )
      ? ''
      : 'opacity-20'}"
>
   <span class="text-xs font-bold">57 - 71</span>
</div>

<div
   class="actinide col-start-3 bg-element-group/20 text-element-group flex justify-center items-center rounded-[0.25rem] row-start-7 row-end-7 {isInGroup(
      'actinide'
   )
      ? ''
      : 'opacity-20'}"
>
   <span class="text-xs font-bold">89 - 103</span>
</div>
