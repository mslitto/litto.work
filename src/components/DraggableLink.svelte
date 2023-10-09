<script lang="ts">
  import { fade } from 'svelte/transition'

  import { is } from '@lib'

  export let href: string = ''
  export let external: string | boolean

  let target: string | undefined = undefined

  if (is.str(external)) {
    target = external as string
  } else if (external) {
    target = '_blank'
  }
</script>

<a class="DraggableLink" {href} {target} in:fade>
  <svg viewBox="0 0 42 42" height="42" width="42">
    <path class="arrow" d="M9 34V9h25v25z" />
    <path class="triangle" d="M0 0l20.8 20.8 9.3-9.3H24.5v-2h9v9h-2v-5.6l-9.3 9.3L43 43V0H0z" />
  </svg>
</a>

<style lang="scss">
  .DraggableLink {
    position: absolute;
    right: 0;
    top: 0;

    &:hover {
      .triangle {
        width: 70px;
        height: auto;
        fill: var(--link-hover-color-svg);
      }
    }
  }

  .arrow {
    fill: var(--body-background-color);
  }

  .triangle {
    fill: var(--white);
  }
</style>
