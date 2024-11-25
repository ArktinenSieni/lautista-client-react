import React, { PropsWithChildren, useEffect, useState } from "react";
import { User } from "../../libraries/types/mod.ts";
import { Context } from "./user-context.ts";
import { getUser } from "../../services/api.ts";
import { ApiUnauthorizedError } from "../../errors.ts";

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    }).catch((e) => {
      if (!(e instanceof ApiUnauthorizedError)) {
        console.error("Getting user failed", e);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ user, clear: () => setUser(null) }}>
      {children}
    </Context.Provider>
  );
}
