// type BuiltinStrings = 'string' | 'number' | 'boolean' | 'object' | string

export const type = (e: any, t: string): boolean => typeof e === t

export const not = (e: any, t: string): boolean => !type(e, t)

export const fn = (e: any): boolean => typeof e === 'function'
export const str = (e: any): boolean => typeof e === 'string'
export const arr = Array.isArray
export const bool = (e: any): boolean => typeof e === 'boolean'

export const num = (e: any): boolean => e === +e

export const int = (e: any): boolean => e === +e && e === (e | 0)
export const float = (e: any): boolean => e === +e

export const empty = (e: any): boolean => !e || e.length === 0
export const regexp = (e: any): boolean => e instanceof RegExp
export const date = (e: any): boolean => e instanceof Date
export const err = (e: any): boolean => e instanceof Error

export const error = err
export const nil = (e: any): boolean => e === null
export const promise = (e: any): boolean => e instanceof Promise
export const undef = (e: any): boolean => typeof e === 'undefined'
export const obj = (e: any): boolean => Object.prototype.toString.call(e) === '[object Object]'
