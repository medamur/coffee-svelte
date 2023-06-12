<script>
	import Button from '../../../shared/ui/button';
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
		+
	</Button>
</div>

<style lang="less">
	.add-button {
		&__container {
			padding: 40px;

			& :global(.add-button) {
				cursor: pointer;
				font-size: 55px;
				color: white;
				border-radius: 50%;
				background-color: red;
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: 200ms;
			}
		}

		&__container :global(.add-button:hover) {
			transform: rotate(90deg);
			background-color: #9d0c0c;
		}

		&__container :global(.add-button--loading) {
			pointer-events: none;
			opacity: 0.3;
		}
	}
</style>
