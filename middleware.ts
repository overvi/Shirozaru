import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/((?!watchlist).*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
