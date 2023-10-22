<script lang="ts">
  import { onMount } from 'svelte'

  import { DraggableLink } from '@components'
  import { on, off } from '@lib/index'

  import { zIndex, activeID, lastID } from '@stores/draggableStore'

  export let external: string | boolean = ''
  export let src: string
  export let href: string = ''
  export let pictureClass: string = ''
  export let imgClass: string = ''
  export let webp: boolean = true

  let draggableRef: HTMLElement
  let pictureRef: HTMLImageElement

  const offset = {
    left: 0,
    top: 0,
  }

  type Style = {
    left: string
    top: string
    transition: string | null
    opacity: string | null
    zIndex: number
  }

  let style: Style = {
    left: '100%',
    top: '100%',
    transition: null,
    opacity: '1',
    zIndex: 0,
  }

  $: style

  const ran = Math.random()
  const pos = {
    left: '100%',
    top: '100%',
  }

  if (ran > 0.7) {
    pos.left = `-${pos.left}`
  } else if (ran < 0.3) {
    pos.top = `-${pos.top}`
  }

  export const getPos = (e: string) => parseInt(e.replace('%', ''))

  export const percentFromPixels = (dir: 'Width' | 'Height', px: number) =>
    (px / window[`inner${dir}`]) * 100

  export const pixelsFromPercent = (dir: 'Width' | 'Height', pc: number) =>
    (pc * window[`inner${dir}`]) / 100

  export const touchHandler = (event: TouchEvent) => {
    const touch = event.changedTouches[0]

    let evt = 'mouseup'
    if (event.type === 'touchstart') {
      evt = 'mousedown'
    } else if (event.type === 'touchmove') {
      evt = 'mousemove'
    } else if (event.type === 'touchend') {
      evt = 'mouseup'
    }

    const simulatedEvent = new MouseEvent(evt, {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: touch.screenX,
      screenY: touch.screenY,
      clientX: touch.clientX,
      clientY: touch.clientY,
    })

    touch.target.dispatchEvent(simulatedEvent)

    return false
  }

  export const isOutOfBounds = (e: MouseEvent) =>
    e.clientX >= window.innerWidth ||
    e.clientX <= 0 ||
    e.clientY >= window.innerHeight ||
    e.clientY <= 0

  export const onDrag = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement
    if ($activeID === src || target.tagName !== 'IMG') {
      return
    }

    activeID.set(src)
    lastID.set('')
    zIndex.set($zIndex + 1)

    offset.left = evt.clientX - pixelsFromPercent('Width', getPos(style.left))
    offset.top = evt.clientY - pixelsFromPercent('Height', getPos(style.top))

    style.transition = 'none'
    style.zIndex = $zIndex
    style.opacity = '0.8'

    // document.addEventListener('mousemove', onMousemove)
    on(document, 'mousemove', onMousemove as (e : Event) => boolean | undefined, { passive: true })
    on(document, 'mouseup', onDrop,{ passive: true })
    on(document, 'mouseout', onDropIfOutOfBounds as (e : Event) => boolean | undefined,{ passive: true })
  }

  export const onDrop = (): boolean | void => {
    if ($activeID !== src) {
      return
    }

    activeID.set('')
    lastID.set(src)

    style.transition = null
    style.opacity = '1'

    off(document, 'mousemove', onMousemove as (e : Event) => boolean | undefined,{ passive: true })
    off(document, 'mouseup', onDrop,{ passive: true })
    off(document, 'mouseout', onDropIfOutOfBounds as (e : Event) => boolean | undefined,{ passive: true })
  }

  const onDropIfOutOfBounds = (e: MouseEvent): boolean | void => {
    if (isOutOfBounds(e)) {
      onDrop()
    }
  }

  export const onMousemove = (evt: MouseEvent): boolean | void => {
    if (draggableRef) {
      const max = {
        left: window.innerWidth - draggableRef.clientWidth,
        top: window.innerHeight - draggableRef.clientHeight,
      }

      const newLeft = Math.floor(Math.max(0, Math.min(evt.clientX - offset.left, max.left)))

      style.left = `${percentFromPixels('Width', newLeft)}%`

      let newTop = evt.clientY - offset.top
      if (newTop < 0) {
        newTop = 0
      } else if (newTop > max.top) {
        newTop = max.top
      }
      style.top = `${percentFromPixels('Height', newTop)}%`
    }
  }

  // resize and reposition after load of images
  export const onLoad = () => {
    const tar = pictureRef

    const boundingClientRect = tar.getBoundingClientRect()
    let width = boundingClientRect.width
    let height = boundingClientRect.height
    let left: number | string = '0'
    let top: number | string = '0'

    // resize if too wide
    const maxWidth = window.innerWidth * 0.9
    if (width > maxWidth) {
      const widthPercent = width / maxWidth + 0.1
      width /= widthPercent
      height /= widthPercent
    }

    // resize if too high
    const maxHeight = window.innerHeight * 0.7
    if (height > maxHeight) {
      const heightPercent = height / maxHeight + 0.1
      height /= heightPercent
      width /= heightPercent
    }

    const maxLeft = window.innerWidth - width
    const maxTop = window.innerHeight - height
    left = Math.random() * maxLeft
    top = Math.random() * maxTop

    style.left = `${Math.floor(percentFromPixels('Width', left))}%`
    style.top = `${Math.floor(percentFromPixels('Height', top))}%`
  }

  onMount(() => {
    const ran = Math.random()
    const pos = {
      left: '100%',
      top: '100%',
    }

    if (ran > 0.7) {
      pos.left = `-${pos.left}`
    } else if (ran < 0.3) {
      pos.top = `-${pos.top}`
    }

    style.left = pos.left
    style.top = pos.top

    // console.log({ style })
    // return

    if (pictureRef.complete) {
      onLoad()
    }
  })
</script>

<div
  role="button"
  tabindex="0"
  class="Draggable"
  class:dragged={$activeID === src}
  class:dropped={$lastID === src}
  style:left={style.left}
  style:top={style.top}
  style:z-index={style.zIndex}
  style:transition={style.transition}
  style:opacity={style.opacity}
  bind:this={draggableRef}
>
  {#if href && $lastID === src}
    <DraggableLink {href} {external} />
  {/if}

  {#if src}
    <picture class={`Picture ${pictureClass}`}>
      {#if webp}
        <source srcset={src.replace(/\.(jpg|png|gif)$/, '.webp')} />
      {/if}

      <img
        class={imgClass}
        bind:this={pictureRef}
        on:load={onLoad}
        on:drop={onDrop}
        on:dragstart|preventDefault
        on:mousedown={onDrag}
        on:touchstart|preventDefault|stopPropagation={touchHandler}
        on:touchmove|preventDefault|stopPropagation={touchHandler}
        on:touchend|preventDefault|stopPropagation={touchHandler}
        on:touchcancel|preventDefault|stopPropagation={touchHandler}
        {src}
        alt=""
        role="presentation"
      />
    </picture>
  {/if}
</div>

<style lang="scss">
  .Draggable {
    position: absolute;
    z-index: 0;
    transition:
      left 500ms,
      top 500ms;
    left: 100vw;
    top: 100vw;

    .dragged {
      transition: none;
    }

    &.dropped {
      a {
        .bg {
          source,
          img {
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
          }
        }
      }

      .bg2 {
        source,
        img {
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  .bg {
    display: inline-block;

    source,
    img {
      max-width: 60vw;
      max-height: 30vh;
    }
  }

  .bg2 {
    display: inline-block;

    source,
    img {
      max-width: 50vw;
      max-height: 40vh;
    }
  }

  @media screen and (min-width: 800px) {
    .bg {
      source,
      img {
        max-width: 40vw;
        max-height: 35vh;
      }
    }

    .bg2 {
      source,
      img {
        max-width: 40vw;
        max-height: 35vh;
      }
    }
  }
</style>
