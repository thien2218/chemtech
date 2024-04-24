<script lang="ts">
   import SearchIcon from "../assets/icons/SearchIcon.svelte";

   let query = "";
</script>

<div class="w-full flex justify-center">
   <div class="flex items-center mb-20 bg-white rounded-full text-gray-950">
      <input
         bind:value={query}
         type="text"
         class="py-4 pl-7 bg-transparent min-w-96 focus:outline-none text-lg"
         placeholder="Search element..."
      />
      <div class="p-5 text-gray-400">
         <SearchIcon />
      </div>
   </div>
</div>
