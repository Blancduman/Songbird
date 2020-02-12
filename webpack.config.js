const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    path: __dirname,
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
        // favicon: './src/assets/images/favicon.ico'
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: path.resolve(__dirname, 'dist/css'),
      //       },
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: { importLoaders: 1 },
      //     },
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/media',
          },
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /\.module\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: 'file-loader',
      // },
      // {
      //   test: /\.(css|scss|sass)$/,
      //   exclude: /\.module\.(css|scss|sass)$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //       },
      //     },
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.module\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    // port: 9000,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //   template: 'src/template.html',
  // }),
  // ],
};

module.exports = config;
