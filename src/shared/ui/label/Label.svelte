<script>
	import { getRandomAndInvertedColor } from '../../lib';

	const [labelBg, labelFontColor] = getRandomAndInvertedColor();
</script>

<span style="background-color: {labelBg}; color: {labelFontColor};" class="label">
	<slot />
</span>

<style>
	.label {
		padding: 5px 30px;
		font-size: 10px;
		border-radius: 3px;
		white-space: nowrap;
	}
</style>
