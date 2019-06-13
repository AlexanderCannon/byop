export const curry = (fn: any, ...args: any) =>
  args.length === fn.length
    ? fn(...args)
    : (...rest: any) =>
        args.length + rest.length >= fn.length
          ? fn(...args, ...rest)
          : curry(fn, ...args, ...rest);

export const addVariadic = (
  a?: number,
  b?: number,
  ...rest: number[]
): number => (b ? (a as number) + addVariadic(b, ...rest) : (a as number));
