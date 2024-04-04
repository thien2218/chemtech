<script lang="ts">
	export let element: ChemElement;
</script>

<div class="element-info">
	<span class="element-number">{element.number}</span>
	<span class="element-name">{element.name}</span>
</div>
<h1 class="element-symbol">{element.symbol}</h1>
<span class="element-mass">{element.atomic_mass.toFixed(2)}</span>
