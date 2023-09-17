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
  event.preventDefault()
  event.stopPropagation()
  return false
}

export const isOutOfBounds = (e: MouseEvent) =>
  e.clientX >= window.innerWidth ||
  e.clientX <= 0 ||
  e.clientY >= window.innerHeight ||
  e.clientY <= 0
