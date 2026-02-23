import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
      index("routes/_index.tsx"),
      route("about", "routes/about.tsx"),
      route("portfolio", "routes/portfolio.tsx"),
      route("portfolio/:projectId", "routes/portfolio/$projectId.tsx"),
      route("contact", "routes/contact.tsx"),
  ]),

  
] satisfies RouteConfig;