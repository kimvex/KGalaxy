const cat = require('catlistener')

cat.server({
  node: 'python -m SimpleHTTPServer'
})

cat.browserify({
  original: './js/files/index.js',
  compilado: './js/index.js',
  presets: ['es2015']
})