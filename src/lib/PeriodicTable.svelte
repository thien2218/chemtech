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

		return "opacity-20";
	};
</script>

<div
	class="grid grid-cols-[repeat(18,minmax(4rem,1fr))] grid-rows-[repeat(10,minmax(4rem,1fr))] gap-1"
>
	<ElementGroups />

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

	{#each elements as element}
		<Tooltip.Root openDelay={500}>
			<Tooltip.Trigger
				class="text-white bg-element-group p-1 text-xs cursor-pointer rounded-[0.25rem] text-start hover:scale-110 {classFormatter(
					element.category
				)} {highlight(element.category)}"
				style="grid-column: {element.xpos}; grid-row: {element.ypos}; transition: transform 0.4s ease, opacity 0.2s ease;"
			>
				<Element {element} />
			</Tooltip.Trigger>

			<Tooltip.Content sideOffset={8}>
				<div class="py-1.5 px-2.5 text-sm bg-gray-900 rounded-lg">
					{element.name}
				</div>
			</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
