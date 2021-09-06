import { writable, derived } from "svelte/store";

export const currentlyActive = writable("");

export const hasActive = derived(
  currentlyActive,
  ($currentlyActive) => $currentlyActive !== ""
);
