<script lang="ts">
	export let element: ChemElement;
</script>

<div class="flex justify-between gap-1.5">
	<span>{element.number}</span>
	<span class="text-[0.625rem] truncate">{element.name}</span>
</div>

<h1 class="text-[1.75rem] leading-tight font-bold text-center my-0.5">
	{element.symbol}
</h1>

<span>{element.atomic_mass.toFixed(2)}</span>
