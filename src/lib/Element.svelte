<script lang="ts">
	import { Dialog, Tooltip } from "bits-ui";
	import { classFormatter } from "../utils";
	import { fade } from "svelte/transition";
	import ElementCard from "./ElementCard.svelte";
	import type { ChemElement } from "../types";

	export let highlight: (category: string) => string;
	export let element: ChemElement;
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="w-full text-start text-white bg-element-group p-1 text-xs cursor-pointer rounded-[0.25rem] hover:scale-110 {classFormatter(
			element.category
		)} {highlight(element.category)}"
		style="grid-column: {element.xpos}; grid-row: {element.ypos}; transition: transform 0.4s ease, opacity 0.2s ease;"
	>
		<Tooltip.Trigger asChild let:builder>
			<div class="leading-[1.1]" use:builder.action {...builder}>
				<div class="flex justify-between gap-1.5">
					<span>{element.number}</span>
					<span class="text-[0.625rem] truncate">{element.name}</span>
				</div>

				<h1
					class="text-[1.75rem] leading-tight font-bold text-center my-0.5"
				>
					{element.symbol}
				</h1>

				<span>{element.atomic_mass.toFixed(2)}</span>
			</div>
		</Tooltip.Trigger>
	</Dialog.Trigger>

	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 200 }}
			class="fixed inset-0 z-50 bg-black/80"
		/>

		<ElementCard {element} />
	</Dialog.Portal>
</Dialog.Root>
