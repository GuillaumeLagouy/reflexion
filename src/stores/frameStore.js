import {writable} from "svelte/store";

export const frameNumber = writable(0);
export const frameNumberPool = writable(0);
export const frameNumberBathroom = writable(0);
export const frameNumberBreakfast = writable(0);
export const frameNumberPlaytime = writable(0);
export const frameNumberLunch = writable(0);
export const frameNumberClass = writable(0);

export const gender = writable("unknown");

