export const ROUTES = {
  home: "/",
  events: "/events",
  user: "/user",
  logout: "/logout",
};

export const ROUTES_NAV = Object.entries(ROUTES).reduce<Partial<typeof ROUTES>>(
  (routes, [key, path]) => {
    if (["user", "logout"].includes(key)) {
      return routes;
    }

    return {
      ...routes,
      [key]: path,
    };
  },
  {},
);
