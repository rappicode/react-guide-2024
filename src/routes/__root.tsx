import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1>Root</h1>
      <div>
        <Outlet />
      </div>
    </>
  ),
});
