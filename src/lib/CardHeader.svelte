<script lang="ts">
	import { Dialog, Separator } from "bits-ui";
	import type { ChemElement } from "../types";
	import CloseIcon from "../assets/icons/CloseIcon.svelte";
	import ZoomInIcon from "../assets/icons/ZoomInIcon.svelte";
	import { classFormatter } from "../utils";

	export let element: ChemElement;
</script>

<div class="h-72 w-full relative overflow-hidden">
	<img
		class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		src={element.image.url}
		alt={element.image.title}
	/>

	<div
		class="relative top-0 h-full w-full bg-black/40 z-10 flex flex-col justify-between"
	>
		<div class="flex items-center justify-between p-3">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={element.source}
				class="p-2 rounded-full hover:bg-white/10"
			>
				<img
					class="w-5 h-5"
					src="https://webperiodictable.web.app/static/media/wikipedia-logo.ba31b234.svg"
					alt="Wikipedia logo"
				/>
			</a>

			<Dialog.Close
				class="rounded-full p-2 text-xl hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
			>
				<CloseIcon />
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</div>

		<div class="relative px-3 py-5">
			<div
				class="{classFormatter(
					element.category
				)} absolute top-0 left-0 -translate-y-full p-1.5 text-xs bg-element-group uppercase flex rounded-r-[2px] font-semibold"
			>
				<span>{element.number}</span>
				<Separator.Root
					orientation="vertical"
					class="mx-2 bg-white w-[1px]"
				/>
				<span>{element.category}</span>
			</div>

			<div class="flex items-end justify-between">
				<div class="flex gap-4">
					<h1 class="text-5xl font-medium">{element.symbol}</h1>

					<div>
						<Dialog.Title class="text-xl font-medium mb-1">
							{element.name}
						</Dialog.Title>

						<p class="text-sm font-semibold opacity-70">
							{element.atomic_mass.toFixed(2)} (g / mol)
						</p>
					</div>
				</div>

				<a
					href={element.image.url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-2xl p-2 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
				>
					<ZoomInIcon />
					<span class="sr-only">View full image</span>
				</a>
			</div>
		</div>
	</div>
</div>
