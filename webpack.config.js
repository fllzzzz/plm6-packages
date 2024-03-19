import { fileURLToPath } from "node:url";
import {
  resolve,
  dirname,
  extname,
} from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = dirname(
  fileURLToPath(import.meta.url)
);

/** 
	@param {number} importLoaderNumber 
		css-loader ->
		modules ->
		importLoaders
 **/
const generateCSSLoaderOption =
  importLoaderNumber => ({
    importLoaders: importLoaderNumber,
    modules: {
      auto: true,
      namedExport: true,
      localIdentName:
        "[path][name]__[local]--[hash:base64:5]",
      localIdentContext: resolve(
        __dirname,
        "src/domain"
      ),
    },
  });

export default {
  context: __dirname,
  devtool: "source-map",
  entry: {
    main: {
      import: "./src/main.ts",
    },
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx"],
    alias: {
      "@router": resolve(__dirname, "src/router"),
      "@domain": resolve(__dirname, "src/domain"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$|\.s[ac]ss$/,
        use: ({ realResource }) =>
          /\.css$/.test(extname(realResource))
            ? [
                MiniCssExtractPlugin.loader,
                {
                  ident: "cssLoader",
                  loader: "css-loader",
                  options:
                    generateCSSLoaderOption(0),
                },
              ]
            : [
                MiniCssExtractPlugin.loader,
                {
                  ident: "cssLoader",
                  loader: "css-loader",
                  options:
                    generateCSSLoaderOption(2),
                },
                {
                  ident: "resolveURLLoader",
                  loader: "resolve-url-loader",
                },
                {
                  ident: "sassLoader",
                  loader: "sass-loader",
                  options: {
                    sourceMap: true,
                    sassOptions: {
                      charset: false,
                    },
                  },
                },
              ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(
        __dirname,
        "public/index.html"
      ),
    }),
    new MiniCssExtractPlugin(),
  ],
};
