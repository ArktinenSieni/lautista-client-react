import React from "react";
import { User } from "../libraries/types/mod.ts";
import { Link } from "../libraries/routing/mod.ts";
import { ROUTES } from "../constants.ts";

export function LinkLogin({ user }: Props) {
  if (!user) {
    return <Link to={ROUTES.home}>login</Link>;
  }

  return (
    <span>
      <Link to={ROUTES.logout}>logout</Link> {user.username}
    </span>
  );
}

type Props = {
  user: User | null;
};
