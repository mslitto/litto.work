<script>
import { classList } from 'svelte-body'
import { BackButton } from '$lib'
</script>

<svelte:body use:classList={"Single"} />

<BackButton />

<slot />

<style type="scss">
  :global(.Single) {
    height: auto;
    display: inline-block;
    padding: 0 0 5em;
    overflow: inherit;
  }
</style>
