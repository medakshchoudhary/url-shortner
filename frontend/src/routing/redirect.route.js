import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import RedirectPage from "../pages/RedirectPage";

export const redirectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/$shortCode",
    component: RedirectPage
});
