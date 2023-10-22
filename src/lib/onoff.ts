export type Ele = HTMLElement | Document | Window
export type Cb = (evt: Event) => boolean | void
export type EventOptions = {
  passive?: boolean
  once?: boolean
  capture?: boolean
}

export const on = (
  ele: EventTarget,
  listener: string,
  cb: Cb,
  options: EventOptions | undefined = undefined,
): void => ele && ele.addEventListener(listener, cb, options)

export const off = (
  ele: EventTarget,
  listener: string,
  cb: Cb,
  options: EventOptions | undefined = undefined,
): void => ele && ele.removeEventListener(listener, cb, options)
