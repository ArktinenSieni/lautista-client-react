import React from "react";
import { FormLogin } from "../components/form-login/mod.ts";
import { useUserContext } from "../components/user-context/mod.ts";

export function Home() {
  const { user } = useUserContext();

  if (!user) {
    return <FormLogin />;
  }

  return <>Hello {user.username}</>;
}
