import React from "react";
import { ROUTES_NAV } from "../constants.ts";
import { Link, Outlet } from "../libraries/routing/mod.ts";
import { useUserContext } from "../components/user-context/mod.ts";
import { LinkLogin } from "../components/link-login.tsx";

export function Root() {
  const { user } = useUserContext();

  return (
    <>
      <nav>
        <ul>
          {Object.entries(ROUTES_NAV).map(([name, path], index) => (
            <li key={index}>
              <Link to={path}>
                {name}
              </Link>
            </li>
          ))}
          <li>
            <LinkLogin user={user} />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
