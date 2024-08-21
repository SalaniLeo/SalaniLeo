<script lang="ts">
    import { setTheme, currentTheme } from '$lib/theme';
</script>

<div id="theme-select">
    {#if $currentTheme == 'light'}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <i class="fa-regular fa-moon themer" on:click={() => setTheme('dark', true)}></i>
    {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <i class="fa-regular fa-sun themer" on:click={() => setTheme('light', true)}></i>
    {/if}
</div>

<style>
    #theme-select {
        transform: translateY(1px);
        cursor: pointer;
        top: 1rem;
        right: 1rem;
        z-index: 22111;
    }
    .fa-regular {
        font-size: 1.5rem;
    }
</style>