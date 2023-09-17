<script>

/** @type string */
export let href

/** @type boolean */
export let nofollow = true

/** @type boolean */
export let noreferrer = true

/** @type boolean */
const isLocal = href[0] === '/' || href[0] === '#'

/** @type string | undefined */
const target = isLocal ? '_blank' : undefined

/** @type string | undefined */
let rel = undefined

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
