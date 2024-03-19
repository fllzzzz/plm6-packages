import { resolve } from "node:path";

export const generateOptions = (
	name: string,
	contextPath: string,
	importLoaderNumber?: number | undefined
) => {
	return {
		importLoaders: importLoaderNumber
			? importLoaderNumber
			: 0,
		modules: {
			auto: true,
			namedExport: true,
			localIdentName: name,
			localIdentContext: resolve(
				__dirname,
				contextPath
			),
		},
	};
};