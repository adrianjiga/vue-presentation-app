import { describe, it, expect } from "vitest";
import router from "../router.ts";

describe("Router", () => {
  const routes = router.getRoutes();

  it("has exactly 14 routes", () => {
    expect(routes).toHaveLength(14);
  });

  it("has a root route for Slide 1", () => {
    const root = routes.find((r) => r.path === "/");
    expect(root).toBeDefined();
    expect(root.components.default.name).toBe("Slide1");
  });

  it("has routes for slides 2 through 14", () => {
    for (let i = 2; i <= 14; i++) {
      const route = routes.find((r) => r.path === `/slide${i}`);
      expect(route, `Route /slide${i} should exist`).toBeDefined();
      expect(route.components.default.name).toBe(`Slide${i}`);
    }
  });

  it("uses HTML5 history mode", () => {
    expect(router.options.history).toBeDefined();
  });
});
