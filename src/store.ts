import { writable } from "svelte/store";
import { classFormatter } from "./utils";

export const selectedGroup = writable<string>("all");

export function setSelectedGroup(group: string) {
	selectedGroup.update((g) => {
		const formatted = classFormatter(group);
		if (g === formatted) return "all";
		return classFormatter(formatted);
	});
}
