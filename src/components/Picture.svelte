<script lang="ts">
  import { is } from '@lib'

  export let height: string | number
  export let width: string | number
  export let role: string | null = null
  export let alt: string | null = null
  export let avif: boolean = false
  export let webp: boolean = true
  export let src: string
  export let imgClass: string | null = null
  export let pictureClass: string = 'Picture'
  export let credits: string | null = null

  if ((alt === '' && !role) || !is.str(role)) {
    role = 'presentation'
  }

  const srcsets: string[] = []

  if (webp !== false) {
    srcsets.push(src.replace(/\.(jpg|png|gif)$/, '.webp'))
  }

  // avif is disabled by default
  if (avif !== false) {
    srcsets.push(src.replace(/\.(jpg|png|gif)$/, '.webp'))
  }

  if (!pictureClass.includes('Picture')) {
    pictureClass = `Picture ${pictureClass ? pictureClass : undefined}`
  }
</script>

<picture class={pictureClass}>
  {#each srcsets as srcset}
    <source {srcset} />
  {/each}

  {#if credits}
    <figure>
      <img class={imgClass} {src} {alt} {role} {height} {width} />
      <figcaption>{credits}</figcaption>
    </figure>
  {:else}
    <img class={imgClass} {src} {alt} {role} {height} {width} />
  {/if}
</picture>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }

  figure {
    margin: 0;
    font-size: 1rem;
  }
</style>
