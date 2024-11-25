import React from "react";
import { useNavigate } from "../../libraries/routing/mod.ts";
import { getHandleSubmit } from "./get-handle-submit.ts";

export function FormLogin() {
  const navigate = useNavigate();
  const handleSubmit = getHandleSubmit(() => navigate(0));

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <input type="submit" value="login" />
    </form>
  );
}
