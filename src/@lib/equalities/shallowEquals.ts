export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    return objA.every((value, index) => value === objB[index]);
  }

  /**
   * 코치님 발제 다시 보면서 타입스크립트에서 왜 이렇게 회피해야하는지 다시 확인하기
   */

  if (
    typeof objA === "object" &&
    typeof objB === "object" &&
    objA !== null &&
    objB !== null
  ) {
    const a = objA as { [key: string]: unknown };
    const b = objB as { [key: string]: unknown };
    return Object.keys(a).every((key) => a[key] === b[key]);
  }

  return objA === objB;
}
