<script lang="ts">
	export let highlight: (category: string) => string;
</script>

<div
	class="lanthanide col-start-3 bg-element-group/20 text-element-group flex justify-center items-center rounded-[0.25rem] row-start-6 row-end-6 {highlight(
		'lanthanide'
	)}"
>
	<span class="text-xs font-bold">57 - 71</span>
</div>

<div
	class="actinide col-start-3 bg-element-group/20 text-element-group flex justify-center items-center rounded-[0.25rem] row-start-7 row-end-7 {highlight(
		'actinide'
	)}"
>
	<span class="text-xs font-bold">89 - 103</span>
</div>
