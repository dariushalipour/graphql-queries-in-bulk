import { BuildConfig, tsc } from "@zoboz/core";

export default new BuildConfig({
	esm: tsc.esm(),
	cjs: tsc.cjs(),
	dts: tsc.dts(),
	srcDir: "./src",
	distDir: "./dist",
	exports: {
		".": "./src/index.ts",
	},
});
