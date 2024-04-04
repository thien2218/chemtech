<script lang="ts">
	import { Tooltip } from "bits-ui";
	import data from "../../public/data/periodic-table-data.json";
	import { classFormatter } from "../utils";
	import ElementGroups from "./ElementGroups.svelte";
	const elements = data.elements;

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
				<div class="element-info">
					<span class="element-number">{element.number}</span>
					<span class="element-name">{element.name}</span>
				</div>
				<h1 class="element-symbol">{element.symbol}</h1>
				<span class="element-mass">{element.atomic_mass.toFixed(2)}</span>
			</Tooltip.Trigger>

			<Tooltip.Content sideOffset={8}>
				<div class="element-tooltip">
					{element.name}
				</div>
			</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
