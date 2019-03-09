// webpack.base.conf.js
const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
const APP_PATH = path.resolve(__dirname, '../src/App.jsx');
module.exports = {
  entry: {
    app: APP_PATH,
    framework: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    filename: 'js/bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'
          }
        ],
        include: [
          path.resolve(__dirname, '../src')
        ],
      },
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" //在html中插入<style>标签
          },
          {
            loader: "css-loader",//获取引用资源，如@import,url()
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {
            loader: "postcss-loader",//自动加前缀
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ],
              javascriptEnabled: true
            }
          },
          {loader: "less-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
          },
          {loader: "sass-loader"},
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 version']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        use: 'url-loader?limit=8129', //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ],
    extensions: [
      '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        framework: {
          test: "framework",
          name: "framework",
          enforce: true
        }
      }
    }
  }
};