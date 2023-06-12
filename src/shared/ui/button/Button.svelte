<script lang="ts">
	let clazz: string;
	export { clazz as class };
</script>

<button class={clazz} on:click><slot /></button>

<style lang="less">
	button {
		background: 0;
		border: none;
		padding: 0;
		outline: 0;
		outline-offset: 0;
		box-shadow: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		cursor: pointer;

		&:active,
		&:hover,
		&:focus {
			outline: 0;
			outline-offset: 0;
			box-shadow: none;
			border: none;
		}
	}
</style>
