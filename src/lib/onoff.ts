export type Ele = HTMLElement | Document | Window
export type Cb = (evt: Event | MouseEvent) => boolean | void

export const on = (ele: Ele, listener: string, cb: Cb): void =>
  ele && ele.addEventListener(listener, cb)

export const off = (ele: Ele, listener: string, cb: Cb): void =>
  ele && ele.removeEventListener(listener, cb)
