export const staticRoutes = {
  home: "/",
  about: "/about",
  services: "/services",
  works: "/works",
  contacts: "/contacts",
};

export const dynamicRoutes = {
  movie: (id: number) => `/movie/${id}`,
  userProfile: (username: string) => `/user/${username}`,
};

export const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
};
