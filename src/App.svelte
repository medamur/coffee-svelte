<script lang="ts">
	import { ProductCardLoad } from './features/catalog';
	import ProductList from './components/catalog/product-list';
	import { onDestroy, onMount } from 'svelte';
	import { sortCoffeeApi } from './shared/api/sort-coffee';
	import { catalogStore } from './app/store/catalog';
	import('./shared/styles/index.less');

	let scheduledAddingSortCoffee;
	let productCount = $catalogStore.length;

	async function addSortCoffee() {
		const sortCoffee = await sortCoffeeApi.getSortCoffee();

		catalogStore.push(sortCoffee);
	}

	const unsubscribe = catalogStore.subscribe(() => {
		if (productCount < $catalogStore.length) {
			clearTimeout(scheduledAddingSortCoffee);

			scheduledAddingSortCoffee = setTimeout(addSortCoffee, 30000);

			productCount = $catalogStore.length;
		}
	});

	onMount(() => {
		addSortCoffee();
	});

	onDestroy(() => {
		unsubscribe();
		clearTimeout(scheduledAddingSortCoffee);
	});
</script>

{#if $catalogStore.length}
	<ProductList products={$catalogStore} />
	<ProductCardLoad />
{/if}
