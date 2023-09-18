<script lang="ts">
import { is } from '$lib'
import { page } from '$app/stores'

export let height : number | string | undefined
export let width : number | string | undefined
export let webp : boolean = true
export let avif : boolean = false
export let alt : string = ''
export let role : string | null = null
export let pictureClass : string = 'Picture'
export let imgClass : string | undefined = ''
export let src : string

if (!src.startsWith('/') && !src.includes($page.url.pathname)) {
  src = `/img${$page.url.pathname}${src}`
}

if ((alt === '' && !role) || !is.str(role)) {
  role = 'presentation'
}

const srcsets : string[] = []

if (webp !== false) {
  srcsets.push(src.replace(/\.(jpg|png|gif)$/, '.webp'))
}

// avif is disabled by default
if (avif !== false) {
  srcsets.push(src.replace(/\.(jpg|png|gif)$/, '.avif'))
}

if (!pictureClass.includes('Picture')) {
  pictureClass = `Picture ${pictureClass ? pictureClass : undefined}`
}
</script>

<picture class={pictureClass}>
  {#each srcsets as srcset}
    <source {srcset} />
  {/each}

  <img class={imgClass} {src} {alt} {role} {height} {width} />
</picture>

<style lang="scss">
  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;

    &.inline {
      width: 50%;
      margin: 0 1em 1em 0;
      height: auto;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      &.inline {
        width: 100%;
        margin: 0 0 1em;
      }
    }
  }
</style>
