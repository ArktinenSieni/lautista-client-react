import { createContext } from "react";
import { User } from "../../libraries/types/mod.ts";

export const Context = createContext<Value>({
  user: null,
  clear: () => console.error("User context is not set up!"),
});

type Value = {
  user: User | null;
  clear: () => void;
};
