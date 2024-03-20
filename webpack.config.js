import { fileURLToPath } from "node:url";
import {
  resolve,
  dirname,
  extname,
} from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { generateOptions } from "./webpack-helpers/generators/css-loader.js";

const __dirname = dirname(
  fileURLToPath(import.meta.url)
);

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
      "@types": resolve(__dirname, "src/types"),
      "@components": resolve(__dirname, "src/components"),
      "@styles": resolve(__dirname, "src/styles"),
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
                  options: generateOptions(
                    0,
                    resolve(__dirname, "src")
                  ),
                },
              ]
            : [
                MiniCssExtractPlugin.loader,
                {
                  ident: "cssLoader",
                  loader: "css-loader",
                  options: generateOptions(
                    2,
                    resolve(__dirname, "src")
                  ),
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
