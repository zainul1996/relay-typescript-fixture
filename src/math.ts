export function add(left: number, right: number): number {
  return left + right;
}

export function chunk<T>(items: T[], size: number): T[][] {
  if (!(size >= 1)) {
    throw new RangeError("size must be at least 1");
  }
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}
