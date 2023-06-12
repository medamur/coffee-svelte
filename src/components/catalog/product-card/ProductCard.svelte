<script lang="ts">
	import type { sortsCoffeeApiTypes } from '../../../shared/api/sort-coffee';
	import Img from '../../../shared/ui/img';
	import Label from '../../../shared/ui/label';

	export let product: sortsCoffeeApiTypes.SortCoffee;

	let imgSrc = 'https://loremflickr.com/500/500/coffee,bean?nocache=' + Date.now();

	$: productNotes = product.notes.split(', ');
</script>

<div class="card">
	<Img imgInfo={{ src: imgSrc, title: product.blend_name, watermark: product.intensifier }} />

	<div class="card__description">
		<div class="card__origin">{product.origin}</div>
		<div class="card__blend-name">{product.blend_name}</div>
		<div class="card__variety">{product.variety}</div>

		<div class="card__notes">
			{#each productNotes as note, i (i)}
				<Label>{note}</Label>
			{/each}
		</div>
	</div>
</div>

<style lang="less">
	.card {
		width: 300px;
		box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
		border-radius: 3px;

		&__notes {
			display: flex;
			gap: 5px;
			overflow-x: auto;
			margin-top: 17px;
		}

		&__notes::-webkit-scrollbar {
			height: 15px;
		}

		&__notes::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&__notes::-webkit-scrollbar-thumb {
			background-color: #d6dee1;
			border-radius: 20px;
			border: 6px solid transparent;
			background-clip: content-box;
		}

		&__notes::-webkit-scrollbar-thumb:hover {
			background-color: #a8bbbf;
		}

		&__description {
			padding: 10px 5px;
		}

		&__origin {
			font-size: 16px;
			color: #79878a;
		}

		&__blend-name {
			font-size: 18px;
			color: #090909;
			font-weight: bold;
			margin: 10px 0 7px;
		}

		&__variety {
			font-size: 16px;
		}
	}
</style>
