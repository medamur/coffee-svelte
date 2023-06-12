<script lang="ts">
	let clazz: string;
	export { clazz as class };
</script>

<button class={clazz} on:click><slot /></button>

<style>
	button {
		background: 0;
		border: none;
		outline: none;
		padding: 0;
	}
</style>
