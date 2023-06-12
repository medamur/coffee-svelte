<script>
	import Button from '../../../shared/ui/button';
	import IconPlus from '../../../shared/ui/icon-plus';
	import { sortCoffeeApi } from '../../../shared/api/sort-coffee';
	import { catalogStore } from '../../../app/store/catalog';

	let isLoading = false;

	async function getSortCoffee() {
		isLoading = true;

		const sortCoffee = await sortCoffeeApi.getSortCoffee();

		catalogStore.push(sortCoffee);

		isLoading = false;
	}
</script>

<div class="add-button__container">
	<Button
		class="add-button {(isLoading && 'add-button--loading') || ''}"
		on:click={() => getSortCoffee()}
	>
		<IconPlus />
	</Button>
</div>

<style lang="less">
	.add-button {
		&__container {
			padding: 20px;

			& :global(.add-button) {
				width: 60px;
				height: 60px;
				transition: 200ms;
			}
		}

		&__container :global(.add-button--loading) {
			opacity: 0.3;
			pointer-events: none;
			transform: rotate(90deg);
		}
	}
</style>
