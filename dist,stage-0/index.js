'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// middleware

app.use(_bodyParser2.default.json({
	limit: _config2.default.bodyLimit
}));
// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
	res.header('Content-Type', 'application/json');
	next();
});

//allow cross origin request
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
	next();
});

// api routes v1
app.use('/v1', _routes2.default);

//route response for default home
app.get('/', function (req, res) {
	res.send("Welcome");
});

//hardcoded login route
app.post('/login', function (req, res) {
	if (req.body.email == "adedapopaul@yahoo.com" && req.body.password == 'password') {
		res.json({
			text: 'login successful'
		});
	} else {
		res.json({
			text: 'user does not exist'
		});
	}
});

app.server.listen(_config2.default.port);

console.log('Started on port ' + app.server.address().port);

exports.default = app;
//# sourceMappingURL=index.js.map