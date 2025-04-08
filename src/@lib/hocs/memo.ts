import React, { ComponentType } from "react";
import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  let prevProps: P | null = null;
  let prevResult: JSX.Element;

  return function MemoizedComponent(nextProps: P) {
    if (_equals(prevProps, nextProps)) {
      return prevResult;
    }

    prevProps = nextProps;
    prevResult = React.createElement(Component, nextProps);
    return prevResult;
  };
}
