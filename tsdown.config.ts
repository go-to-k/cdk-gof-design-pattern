import { defineConfig } from "tsdown";

export default defineConfig([
  {
    name: "bin",
    entry: ["bin/cdk-gof-design-pattern.ts"],
    format: "esm",
    outDir: "dist/bin",
    clean: true,
    sourcemap: true,
    platform: "node",
    target: "node24",
    external: ["aws-cdk-lib", "constructs", "source-map-support"],
  },
  {
    name: "lib",
    entry: ["lib/**/*.ts", "!lib/**/*.d.ts"],
    format: "esm",
    outDir: "dist",
    clean: true,
    sourcemap: true,
    platform: "node",
    target: "node24",
    external: ["aws-cdk-lib", "constructs", "source-map-support"],
  },
  {
    name: "singleton",
    entry: ["lib/stack/singleton/lambda/index.ts"],
    format: "esm",
    outDir: "lib/stack/singleton/lambda/dist",
    clean: true,
    platform: "node",
    target: "node24",
    external: ["aws-sdk"],
  },
]);
