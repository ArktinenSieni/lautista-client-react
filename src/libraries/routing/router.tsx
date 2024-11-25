import React, { PropsWithChildren, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router({ children, rootElement }: PropsWithChildren<Props>) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={rootElement}>
          {children}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

type Props = {
  rootElement: ReactNode;
};
