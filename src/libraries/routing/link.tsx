import React, { PropsWithChildren } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import type { To } from "react-router-dom";

export function Link({ children, to }: PropsWithChildren<Props>) {
  return <ReactRouterLink to={to}>{children}</ReactRouterLink>;
}

type Props = {
  to: To;
};
