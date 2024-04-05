<script lang="ts">
	import { Button } from "bits-ui";
	import { ELEMENT_GROUPS, classFormatter } from "../utils";
	import { selectedGroup, setSelectedGroup } from "../store";
</script>

<div class="element-groups">
	{#each ELEMENT_GROUPS as group}
		<div class="element-group">
			<Button.Root
				class="element-group-button {$selectedGroup ===
				classFormatter(group)
					? 'active'
					: ''}"
				on:click={() => setSelectedGroup(group)}
			>
				<div class="element-group-color {classFormatter(group)}"></div>
				{group}
			</Button.Root>
		</div>
	{/each}
</div>

<style>
</style>
