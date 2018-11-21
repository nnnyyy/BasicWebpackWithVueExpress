"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by nnnyyy on 2018-11-21.
 */
var app = (0, _express.default)();
app.set('views', _path.default.join(__dirname, '..', '..', 'view'));
app.set('view engine', 'ejs');
app.use(_express.default.static(_path.default.join(__dirname, '..', '..', 'dist')));
app.use(_express.default.static(_path.default.join(__dirname, '..', '..', 'public')));
app.get('/', function (req, res) {
  res.render('index');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});