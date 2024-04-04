<script lang="ts">
	import { Tooltip } from "bits-ui";
	import data from "../data/periodic-table-data.json";
	import { classFormatter } from "../utils";
	import ElementGroups from "./ElementGroups.svelte";
	import Element from "./Element.svelte";
	const elements = data.elements as ChemElement[];

	let highlightedCat: string = "all";

	const setHighlightedCat = (group: string) => {
		const formatted = classFormatter(group);

		if (formatted === highlightedCat) {
			highlightedCat = "all";
			return;
		}

		highlightedCat = formatted;
	};

	$: highlight = (category: string): string => {
		if (
			highlightedCat === "all" ||
			highlightedCat === classFormatter(category)
		) {
			return "";
		}

		return "lowlighted";
	};
</script>

<div class="table-grid">
	<ElementGroups {highlightedCat} {setHighlightedCat} />

	{#each elements as element}
		<Tooltip.Root openDelay={500}>
			<Tooltip.Trigger
				class={`element ${classFormatter(element.category)} ${highlight(element.category)}`}
				style={`grid-column: ${element.xpos}; grid-row: ${element.ypos}`}
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
