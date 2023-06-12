<script lang="ts">
	import type { sortsCoffeeApiTypes } from '../../../shared/api/sort-coffee';
	import ProductCard from '../product-card';
	import { afterUpdate } from 'svelte';

	export let products: sortsCoffeeApiTypes.SortCoffee[] | [] = [];

	let productList: HTMLDivElement;

	function updateScrollPosition() {
		const clientRects = productList.getClientRects();
		if (document.body.scrollWidth < productList.scrollWidth) {
			productList.scrollTo({
				left: productList.scrollWidth - document.body.scrollWidth + clientRects.item(0).x * 2,
				behavior: 'smooth',
				top: 0
			});
		}
	}

	afterUpdate(() => {
		updateScrollPosition();
	});
</script>

<div class="product-list" bind:this={productList}>
	{#each products as product (product.uid)}
		<ProductCard {product} />
	{/each}
</div>

<style lang="less">
	.product-list {
		margin: 15px;
		display: flex;
		gap: 15px;
		overflow-x: scroll;
		box-shadow: 0 4px 28px rgba(123, 151, 158, 0.25);
		border-radius: 3px;
		padding: 10px;

		&::-webkit-scrollbar {
			height: 20px;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #d6dee1;
			border-radius: 20px;
			border: 6px solid transparent;
			background-clip: content-box;
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: #a8bbbf;
		}
	}
</style>
