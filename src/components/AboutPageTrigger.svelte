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
    <source srcset="/img/litto_white_transp.webp" />
    <img src="/img/litto_white_transp.png" height="237" width="320" alt="" role="presentation" />
  </picture>
</a>

<style lang="scss">
  .about-page-trigger {
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
</style>
