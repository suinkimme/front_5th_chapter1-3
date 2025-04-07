export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return objA.every((value, index) => value === objB[index]);
  }

  return objA === objB;
}
