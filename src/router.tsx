// src/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    // Disable SSR by default
    //defaultSsr: false,
    defaultNotFoundComponent: () => {
      return (
        <div>
          <h1>Nope, go away! Please! hehehe</h1>
        </div>
      );
    },
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
