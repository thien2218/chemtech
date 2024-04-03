<script lang="ts">
	import { Button } from "bits-ui";
	import { classFormatter } from "../utils";

	export let setHighlightedCat: (group: string) => void;

	const COL_START = 4;
	const elementGroups = [
		"Alkali metal",
		"Alkaline earth metal",
		"Transition metal",
		"Post-transition metal",
		"Metalloid",
		"Diatomic nonmetal",
		"Polyatomic nonmetal",
		"Noble gas",
		"Lanthanide",
		"Actinide",
		"Unknown",
	];
</script>

{#each elementGroups as group, i}
	<div
		class="element-group"
		style={`grid-column-start: ${COL_START + (i % 4) * 2}; grid-row-start: ${Math.floor(i / 4) + 1}`}
	>
		<Button.Root
			class="element-group-button"
			on:click={() => setHighlightedCat(classFormatter(group))}
		>
			<div class={`element-group-color ${classFormatter(group)}`}></div>
			{group}
		</Button.Root>
	</div>
{/each}
