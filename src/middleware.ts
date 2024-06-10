//middleware.ts
import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ["ar", "en"],

  // Default locale if no match
  defaultLocale: "ar",
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ar)/:page*"],
};
