<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="layout">
	{@render children()}
</div>

<style>

    /* @media screen and (max-width: 1035px) {
        #layout {
            padding-bottom: 60px;
        }
    } */

</style>