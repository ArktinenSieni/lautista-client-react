import {
  Entity,
  Event as LautisEvent,
  LoginPayload,
  User,
} from "@lautista/types";
import { ApiUnauthorizedError } from "../errors.ts";

export async function getEvents(): Promise<Entity<LautisEvent>[]> {
  const response = await fetch(`${V1_ROOT}/events`);

  return response.json();
}

export async function getUser(): Promise<User> {
  const response = await fetch(`${AUTH_ROOT}/user`, {
    credentials: "include",
  });

  if (response.status === 401) {
    throw new ApiUnauthorizedError("Unauthorized while getting user");
  }

  return response.json();
}

export async function logIn(username: string, password: string): Promise<void> {
  const requestBody: LoginPayload = {
    password,
    username,
  };

  const response = await fetch(`${AUTH_ROOT}/login`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  if (response.status === 401) {
    throw new ApiUnauthorizedError("Unauthorized while logging in");
  }
}

export async function logOut(): Promise<void> {
  await fetch(`${AUTH_ROOT}/logout`, {
    method: "POST",
    credentials: "include",
  });
}

const API_ROOT = "http://localhost:8080";
const V1_ROOT = `${API_ROOT}/v1`;
const AUTH_ROOT = `${API_ROOT}/auth`;
