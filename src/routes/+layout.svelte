<script lang="ts">
	import ThemeChanger from './../lib/svelteComponents/themeChanger.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}