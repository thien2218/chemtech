<script lang="ts">
	import { Tooltip } from "bits-ui";
	import data from "../data/periodic-table-data.json";
	import { classFormatter } from "../utils";
	import ElementGroups from "./ElementGroups.svelte";
	import Element from "./Element.svelte";
	import { selectedGroup } from "../store";

	const elements = data.elements as ChemElement[];

	$: highlight = (category: string): string => {
		if (
			$selectedGroup === "all" ||
			$selectedGroup === classFormatter(category)
		) {
			return "";
		}

		return "lowlighted";
	};
</script>

<div class="table-grid">
	<ElementGroups />

	<div
		class="lanthanide outer-group lanthanide-group {highlight('lanthanide')}"
	>
		<span class="outer-group-range">57 - 71</span>
	</div>

	<div class="actinide outer-group actinide-group {highlight('actinide')}">
		<span class="outer-group-range">89 - 103</span>
	</div>

	{#each elements as element}
		<Tooltip.Root openDelay={500}>
			<Tooltip.Trigger
				class="element {classFormatter(element.category)} {highlight(
					element.category
				)}"
				style="grid-column: {element.xpos}; grid-row: {element.ypos}"
			>
				<Element {element} />
			</Tooltip.Trigger>

			<Tooltip.Content sideOffset={8}>
				<div class="element-tooltip-content">
					{element.name}
				</div>
			</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
