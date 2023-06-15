import { type Readable, writable } from 'svelte/store';
import type { sortsCoffeeApiTypes } from '@shared/api/sort-coffee';

interface Catalog extends Readable<sortsCoffeeApiTypes.SortCoffee[]> {
	push: (sortCoffee: sortsCoffeeApiTypes.SortCoffee) => void;
	reset: () => void;
}

const createCatalog = (): Catalog => {
	const initialData: sortsCoffeeApiTypes.SortCoffee[] = [];

	const { subscribe, set, update } = writable(initialData);

	return {
		subscribe,
		push: (sortCoffee) => update((sortsCoffee) => [...sortsCoffee, sortCoffee]),
		reset: () => set(initialData)
	};
};

export const catalogStore = createCatalog();
