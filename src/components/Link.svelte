<script lang="ts">
  export let href: string
  export let nofollow: boolean = false
  export let noreferrer: boolean = false

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

<a {href} {rel} {target}><slot /></a>
