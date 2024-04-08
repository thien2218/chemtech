import { writable } from "svelte/store";
import { classFormatter } from "./utils";
import type { ChemElement } from "./types";

export const selectedGroup = writable<string>("all");

export function setSelectedGroup(group: string) {
	selectedGroup.update((g) => {
		const formatted = classFormatter(group);
		if (g === formatted) return "all";
		return classFormatter(formatted);
	});
}

export const curElement = writable<ChemElement | null>(null);
