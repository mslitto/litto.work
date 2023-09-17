<script>
import { is } from '$lib'
import { page } from '$app/stores'

/** @type number | string | undefined*/
export let height

/** @type number | string | undefined */
export let width

/** @type boolean */
export let webp = true

/** @type boolean */
export let avif = true
export let alt = ''

/** @type string | null */
export let role = null
/** @type string */
export let pictureClass = 'Picture'
/** @type string | undefined */
export let imgClass = ''
/** @type string */
export let src

if (!src.includes($page.url.pathname)) {
  src = `/img${$page.url.pathname}${src}`
}

if ((alt === '' && !role) || !is.str(role)) {
  role = 'presentation'
}

/** @type string[] */
const srcsets = []

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
    <source srcset={srcset} />
  {/each}

  <img class={imgClass} {src} {alt} {role} {height} {width} />
</picture>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
</style>
