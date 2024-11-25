import { FormEventHandler } from "react";
import type { LoginForm } from "./types.ts";
import { logIn } from "../../services/api.ts";

export function getHandleSubmit(
  onSuccess: () => void,
): FormEventHandler<LoginForm> {
  return async (e) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    try {
      await logIn(username, password);
      onSuccess();
    } catch (e) {
      console.log("hups", e);
    }
  };
}
