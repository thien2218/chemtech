<script lang="ts">
	import { Tooltip } from "bits-ui";
	import data from "../../public/data/periodic-table-data.json";
	const elements = data.elements;

	const classFormatter = (category: string) => {
		const className = category.split(" ").join("-");
		return className;
	};
</script>

<div class="table-grid">
	{#each elements as element}
		<Tooltip.Root openDelay={0}>
			<Tooltip.Trigger
				class={`element ${classFormatter(element.category)}`}
				style={`grid-column: ${element.xpos}; grid-row: ${element.ypos}`}
			>
				<div class="element-info">
					<div class="element-number">{element.number}</div>
					<div class="element-name">{element.name}</div>
				</div>
				<div class="element-symbol">{element.symbol}</div>
				<div class="element-mass">{element.atomic_mass.toFixed(2)}</div>
			</Tooltip.Trigger>

			<Tooltip.Content sideOffset={8}>
				<div class="element-tooltip">
					{element.name}
				</div>
			</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
