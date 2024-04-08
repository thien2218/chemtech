<script lang="ts">
	import { Dialog } from "bits-ui";
	import { fade } from "svelte/transition";
	import type { ChemElement } from "../types";
	import CardHeader from "./CardHeader.svelte";

	export let element: ChemElement;
</script>

<Dialog.Content
	transition={fade}
	class="fixed left-1/2 top-1/2 z-50 w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 bg-background shadow-popover outline-none sm:max-w-[32rem]"
>
	<CardHeader {element} />

	<Dialog.Description class="text-sm text-foreground-alt">
		Create and manage API keys. You can create multiple keys to organize your
		applications.
	</Dialog.Description>

	<div class="flex flex-col items-start gap-1 pb-11 pt-7">
		<div class="relative w-full">
			<input
				id="apiKey"
				class="inline-flex h-input w-full items-center rounded-card-sm border border-border-input bg-background px-4 text-sm placeholder:text-foreground-alt/50 hover:border-dark-40 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
				placeholder="secret_api_key"
				type="password"
				autocomplete="off"
			/>
		</div>
	</div>
</Dialog.Content>
