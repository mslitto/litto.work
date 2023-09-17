<script type="ts">
  import { isAboutPageOpen } from '$lib/stores/index'

  const toggle = () => {
    if (!$isAboutPageOpen) {
      window.location.hash = '#about'
      isAboutPageOpen.set(true)
    } else {
      window.location.hash = ''
      isAboutPageOpen.set(false)
    }
  }

  const href = null
</script>

<a
  on:click|preventDefault={toggle}
  {href}
  target="_blank"
  rel="nofollow noopener noreferrer"
>
  <picture>
    <source srcset="/img/litto_white_transp.webp" />
    <img src="/img/litto_white_transp.png" height="237" width="320" alt="" role="presentation" />
  </picture>
</a>

<style lang="scss">
  * {
    position: fixed;
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    padding: 10px;
    z-index: 1000000;
    font-family: sans-serif;
    color: var(--black);
  }

  img {
    width: 120px;
    height: auto;
  }
</style>
