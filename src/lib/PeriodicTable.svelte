<script lang="ts">
	import { Dialog, Tooltip } from "bits-ui";
	import data from "../assets/data/periodic-table-data.json";
	import { classFormatter } from "../utils";
	import ElementGroups from "./ElementGroups.svelte";
	import OuterGroupsSpan from "./OuterGroupsSpan.svelte";
	import Element from "./Element.svelte";
	import { selectedGroup, curElement } from "../store";
	import type { ChemElement } from "../types";
	import ElementCard from "./ElementCard.svelte";
	import { fade } from "svelte/transition";

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

	const onCloseDialog = (open: boolean) => {
		if (!open) {
			curElement.set(null);
		}
	};
</script>

<div
	class="grid grid-cols-[repeat(18,minmax(4rem,1fr))] grid-rows-[repeat(10,minmax(4rem,1fr))] gap-1"
>
	<ElementGroups />

	<OuterGroupsSpan {highlight} />

	<Dialog.Root onOpenChange={onCloseDialog}>
		{#each elements as element}
			<Tooltip.Root openDelay={500}>
				<Element {element} {highlight} />

				<Tooltip.Content sideOffset={8}>
					<div class="py-1.5 px-2.5 text-sm bg-gray-900/90 rounded-lg">
						{element.name}
					</div>
				</Tooltip.Content>
			</Tooltip.Root>
		{/each}

		<Dialog.Portal>
			<Dialog.Overlay
				transition={fade}
				transitionConfig={{ duration: 200 }}
				class="fixed inset-0 z-50 bg-black/80"
			/>

			<ElementCard />
		</Dialog.Portal>
	</Dialog.Root>
</div>
