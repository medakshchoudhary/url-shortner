import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import RedirectPage from "../pages/RedirectPage";

export const redirectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/$shortCode",
    component: RedirectPage,
    // Catch all paths that don't match other routes
    beforeLoad: ({ params }) => {
        // Ensure we have a shortCode
        if (!params.shortCode) {
            throw new Error('Short code not found');
        }
    }
});
