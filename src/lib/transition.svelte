<script lang="ts">
  import { fly } from "svelte/transition";
  export let pathname: string = "";
</script>

{#key pathname}
  <div
    in:fly={{ x: 0, duration: 400, delay: 400 }}
    out:fly={{ x: 0, duration: 400 }}
  >
    <slot />
  </div>
{/key}
