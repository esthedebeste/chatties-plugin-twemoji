import * as esbuild from "esbuild"

/** @type {import("esbuild").BuildOptions} */
const config = {
	entryPoints: ["src/twemoji.ts"],
	bundle: true,
	outfile: "dist/twemoji.js",
	format: "esm",
	mainFields: ["module", "main"],
	minify: true,
	treeShaking: true,
}

await esbuild.build(config)
