module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './client/dist/bundle.js'
  },
  
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
