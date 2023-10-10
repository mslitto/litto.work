<script lang="ts">
  export let href: string
  export let nofollow: boolean = false
  export let noreferrer: boolean = false

  let className: string = ''
  export { className as class }

  const isLocal: boolean = href[0] === '/' || href[0] === '#'

  const target: string | null = isLocal ? null : '_blank'
  let rel: string | undefined = undefined

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
  :global(.dark) {
    color: #000000;
  }
  :global(.bold) {
    font-weight: bold;
  }
  :global(.underline) {
    text-decoration: underline;
  }
</style>
