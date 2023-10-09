export const cl = {
  has(e: HTMLElement, c: string): boolean {
    return !!e.className && e.className.indexOf(c) > -1
  },

  add(e: HTMLElement, c: string): void {
    if (!cl.has(e, c)) {
      if (e.className) {
        c = e.className + ' ' + c
      }
      e.className = c
    }
  },

  rm(e: HTMLElement, c: string) {
    if (cl.has(e, c)) {
      e.className = e.className.replace(c, '').trim()
    }
  },

  toggle(e: HTMLElement, c: string) {
    if (cl.has(e, c)) {
      cl.rm(e, c)
    } else {
      cl.add(e, c)
    }
  },
}
