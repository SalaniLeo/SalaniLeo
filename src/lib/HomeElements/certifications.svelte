<script>
	import Modal from "$lib/svelteComponents/modal.svelte";
	
    let { showdocuments = $bindable() } = $props()

</script>

<Modal bind:showModal={showdocuments}>
	{#snippet header()}
		<h2>
			Documents
		</h2>
	{/snippet}

        <div class="content">
          <div class="documents-list">
              <a href="cambridge.pdf" target="_blank" class="link">C1 Cambridge Certificate</a>
              <a href="europasscv.pdf" target="_blank" class="link">Europass CV</a>
          </div>
        </div>

</Modal>

<style>
.documents-list a {
    font-size: 24;
    font-weight: 600;
  }
  .documents-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .content {
    flex-direction: column !important;
    gap: 1rem;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style>