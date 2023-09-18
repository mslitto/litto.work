<script lang="ts">

export let href : string

export let nofollow : boolean = true

export let noreferrer : boolean = true

export let className : string | null = null

export let dark : boolean = false
export let underline : boolean = false

if (dark) {
  if (!className) {
    className = 'dark'
  } else if (!className.includes('dark')) {
    className += ' dark'
  }
}

if (underline) {
  if (!className) {
    className = 'underline'
  } else if (!className.includes('underline')) {
    className += ' underline'
  }
}

const isLocal : boolean = href[0] === '/' || href[0] === '#'

const target :string | undefined = isLocal ? '_blank' : undefined

let rel : string | undefined = undefined

if (!isLocal) {
  rel = 'noopener'

  if (nofollow) {
    rel += ' nofollow'
  }
  if (noreferrer) {
    rel += ' noreferrer'
  }
}
</script>

<a class={className} {href} {rel} {target}><slot /></a>

<style lang="scss">
  .underline {
    text-decoration: underline;
  }

  .dark {
    color: var(--link-color-dark);

    &:hover {
      color: var(--link-hover-color);
    }
  }
</style>