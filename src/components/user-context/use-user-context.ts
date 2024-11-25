import { useContext } from "react";
import { Context } from "./user-context.ts";

export const useUserContext = () => useContext(Context);
