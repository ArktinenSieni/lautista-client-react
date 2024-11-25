import React from "react";
import "./App.css";
import { ROUTES } from "./constants.ts";
import { Route, Router } from "./libraries/routing/mod.ts";
import { Events, Home, Logout, Root } from "./pages/mod.ts";
import { UserProvider } from "./components/user-context/mod.ts";

function App() {
  return (
    <UserProvider>
      <Router rootElement={<Root />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.events} element={<Events />} />
        <Route path={ROUTES.logout} element={<Logout />} />
      </Router>
    </UserProvider>
  );
}

export default App;
