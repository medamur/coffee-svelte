<script lang="ts">
	interface Info {
		src: string;
		title: string;
		watermark: string | undefined;
	}

	export let imgInfo: Info;

	let isLoadedImg = false;
</script>

<div class="img__container {(isLoadedImg && 'img__container--hide-bg') || ''}">
	{#if imgInfo.watermark}
		<span class="img__watermark">{imgInfo.watermark}</span>
	{/if}

	<img
		alt={imgInfo.title}
		src={imgInfo.src}
		loading="lazy"
		decoding="async"
		class="img {(isLoadedImg && 'img--show') || ''}"
		on:load={() => (isLoadedImg = true)}
	/>
</div>

<style lang="less">
	.img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		transition: 200ms;
		opacity: 0;
		vertical-align: middle;

		&--show {
			opacity: 1;
		}

		&__container {
			position: relative;
			height: 300px;
			border-radius: 3px 3px 0 0;
			overflow: hidden;
			background: #f6f7f8
			linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) no-repeat;
			background-size: 400px 300px;
			-webkit-animation-duration: 1s;
			animation-duration: 1s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			-webkit-animation-fill-mode: forwards;
			animation-fill-mode: forwards;
			-webkit-animation-iteration-count: infinite;
			-webkit-animation-name: placeholderShimmer;
			animation-name: placeholderShimmer;
			-webkit-animation-timing-function: linear;
			transition: 200ms;

			@keyframes placeholderShimmer {
				0% {
					background-position: -300px 0;
				}

				100% {
					background-position: 300px 0;
				}
			}

			&--hide-bg {
				background: transparent;
			}
		}

		&__watermark {
			position: absolute;
			top: 15px;
			right: 10px;
			font-size: 20px;
			color: white;
			pointer-events: none;
		}
	}
</style>
