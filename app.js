const express = require('express');
const app = express();
const routes = require('./config/router');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const dotenv = require('dotenv');


app.set('PORT', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(webpackDevMiddleware( compiler, {
	publicPath: webpackConfig.output.publicPath,
	hot: true
}))

app.use(express.static(path.join(__dirname, 'dist')));

routes(app);

app.use((req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(app.get('PORT'), () => {
	console.log(`The app is listening on port: ${app.get('PORT')}`);
})