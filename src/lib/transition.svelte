<script lang="ts">
  import { fly } from "svelte/transition";
  export let pathname: string = "";
</script>

{#key pathname}
  <div
    in:fly={{ x: 25, duration: 500, delay: 500 }}
    out:fly={{ x: 25, duration: 500 }}
  >
    <slot />
  </div>
{/key}
