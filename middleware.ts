import { authMiddleware } from "@clerk/nextjs/server"; // Ensure the correct import path

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhooks(.*)",
    "/api/uploadthing",
    "/:username",
    "/search",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
