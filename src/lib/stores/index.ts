import { writable } from 'svelte/store'

/** @type boolean */
export const isAboutPageOpen = writable(false)

/** @type string */
export const activeID = writable('')

/** @type string */
export const lastID = writable('')

/** @type number */
export const zIndex = writable(0)
