import React from "react";
import { useNavigate } from "../libraries/routing/mod.ts";
import { logOut } from "../services/api.ts";
import { ROUTES } from "../constants.ts";
import { useUserContext } from "../components/user-context/mod.ts";

export function Logout() {
  const navigate = useNavigate();
  const { clear: clearUser } = useUserContext();

  logOut().finally(() => {
    clearUser();
    navigate(ROUTES.home);
  });

  return <>Logging out...</>;
}
