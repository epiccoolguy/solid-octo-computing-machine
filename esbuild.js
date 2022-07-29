import { build } from "esbuild";
import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";

await build({
  entryPoints: ["index.ts"],
  outdir: "./build/",
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "esm",
  logLevel: "warning",
  plugins: [pnpPlugin()],
});
