<script lang="ts">
  import { isOpen } from '@stores/aboutPageStore'

  const toggle = () => {
    if (!$isOpen) {
      window.location.hash = '#about'
      isOpen.set(true)
    } else {
      window.location.hash = ''
      isOpen.set(false)
    }
  }
</script>

<a
  on:click|preventDefault={toggle}
  class="about-page-trigger"
  href="https://www.instagram.com/ms.litto"
  target="_blank"
  rel="nofollow noopener noreferrer"
>
  <picture>
    <source srcset="/img/logo_b.webp" />
    <img src="/img/logo_b.png" height="237" width="320" alt="" role="presentation" />
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
    margin: 0 15px 0 0;
  }
</style>
