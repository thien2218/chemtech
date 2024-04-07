<script lang="ts">
	import lookup from "../data/periodic-table-lookup.json";

	export let elementName: keyof Omit<typeof lookup, "order">;

	const element = lookup[elementName] as ChemElement;
</script>

<div class="element-card">
	<div class="element-card__header"></div>
</div>
