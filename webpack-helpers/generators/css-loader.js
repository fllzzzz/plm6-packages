export const generateOptions = (
	importLoaderNumber,
	contextPath,
	name = '[path][name]__[local]--[hash:base64:5]',
) => {
	return {
		importLoaders: importLoaderNumber,
		modules: {
			auto: true,
			namedExport: true,
			localIdentName: name,
			localIdentContext: contextPath
		},
	};
};
