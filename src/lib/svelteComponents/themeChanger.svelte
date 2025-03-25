<script lang="ts">
    import { setTheme, currentTheme } from '$lib/theme';
</script>

<div id="theme-select">
    {#if $currentTheme == 'light'}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <i class="fa-regular fa-moon themer" onclick={() => setTheme('dark', true)}></i>
    {:else}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <i class="fa-regular fa-sun themer" onclick={() => setTheme('light', true)}></i>
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