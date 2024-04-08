<script lang="ts">
	import { Dialog } from "bits-ui";
	import { fade } from "svelte/transition";
	import type { ChemElement } from "../types";
	import CardHeader from "./CardHeader.svelte";
	import mapper from "../assets/data/element-data-map";
	import ElementDetails from "./ElementDetails.svelte";
	import { curElement } from "../store";
	import { onDestroy } from "svelte";

	let element: ChemElement;

	const unsubsribe = curElement.subscribe((value) => {
		element = value as ChemElement;
	});

	onDestroy(unsubsribe);
</script>

<Dialog.Content
	transition={fade}
	class="fixed left-1/2 top-1/2 z-50 w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 p-4 bg-background shadow-popover outline-none sm:max-w-[35rem] text-white max-h-screen overflow-y-auto"
>
	<CardHeader {element} />

	{#each mapper as { title, fields }}
		<ElementDetails {title} {fields} {element} />
	{/each}
</Dialog.Content>
