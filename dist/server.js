/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/controllers/users.js":
/*!*****************************************!*\
  !*** ./src/server/controllers/users.js ***!
  \*****************************************/
/*! exports provided: TaskManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskManager\", function() { return TaskManager; });\n/* harmony import */ var _models_signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/signUp */ \"./src/server/models/signUp.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\r\n * Manage Tasks for our Express API\r\n */\n\nvar TaskManager =\n/*#__PURE__*/\nfunction () {\n  /**\r\n     *Creates an instance of TaskManager.\r\n     * @param {*} req - express request object\r\n     * @param {*} res - express response object\r\n     * @memberof TaskManager\r\n     */\n  function TaskManager(req, res) {\n    _classCallCheck(this, TaskManager);\n\n    this.req = req;\n    this.res = res;\n  }\n  /**\r\n         *  Find tasks that match the specified options\r\n         *\r\n         * @param {*} options\r\n         * @memberof TaskManager\r\n         */\n\n\n  _createClass(TaskManager, [{\n    key: \"find\",\n    value: function find() {\n      var _this = this;\n\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      Task.find(options, function (error, tasks) {\n        if (error) {\n          _this.res.json({\n            error: error.message\n          });\n        } else {\n          _this.res.json(tasks);\n        }\n      });\n    }\n    /**\r\n           *\r\n           *\r\n           * @param {*} [option={}]\r\n           * @memberof TaskManager\r\n           */\n\n  }, {\n    key: \"findTaskById\",\n    value: function findTaskById() {\n      var _this2 = this;\n\n      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      Task.findById(option, function (error, tasks) {\n        if (error) {\n          var response = error.message;\n\n          if (error.kind === 'ObjectId') {\n            response = 'Invalid Id';\n          }\n\n          _this2.res.json({\n            error: response\n          });\n        } else {\n          _this2.res.json(tasks);\n        }\n      });\n    }\n    /**\r\n       *\r\n       *\r\n       * @param {*} [option={}]\r\n       * @memberof TaskManager\r\n       */\n\n  }, {\n    key: \"updateTask\",\n    value: function updateTask() {\n      var _this3 = this;\n\n      Task.findById(this.req.params.id).exec(function (error, task) {\n        if (error) {\n          _this3.res.json({\n            error: error.message\n          });\n        } else {\n          task.name = _this3.req.body.name || task.name;\n          task.body = _this3.req.body.body || task.body;\n          task.startDate = _this3.req.body.startDate || tasks.startDate;\n          task.endDate = _this3.req.body.endDate || tasks.endDate;\n          task.save();\n\n          _this3.res.json(task);\n        }\n\n        ;\n      });\n    }\n    /**\r\n           *\r\n           *\r\n           * @param {*} [id={}]\r\n           * @memberof TaskManager\r\n           */\n\n  }, {\n    key: \"deleteTask\",\n    value: function deleteTask(id) {\n      var _this4 = this;\n\n      Task.findByIdAndRemove(id, function (error, tasks) {\n        if (!error) {\n          _this4.res.json(tasks);\n        } else {\n          _this4.res.json({\n            error: 'Invalid task ID'\n          });\n        }\n      });\n    }\n    /**\r\n           *\r\n           *\r\n           *\r\n           * @memberof TaskManager\r\n           */\n\n  }, {\n    key: \"insertTask\",\n    value: function insertTask() {\n      var _this5 = this;\n\n      var newTask = new Task(this.req.body);\n      newTask.save(function (error, tasks) {\n        if (error) {\n          console.log('error');\n          var response = error.message;\n\n          _this5.res.json({\n            error: response\n          });\n        } else {\n          // this.res.redirect('http://localhost:3000/');\n          _this5.res.json(tasks);\n        }\n      });\n    }\n    /**\r\n     *\r\n     *\r\n     * @memberof TaskManager\r\n     */\n\n  }, {\n    key: \"insertUser\",\n    value: function insertUser() {\n      var _this6 = this;\n\n      var newUser = new _models_signUp__WEBPACK_IMPORTED_MODULE_0__[\"registerUser\"](this.req.body);\n      console.log(this.req.body);\n      newUser.save(function (error, realestateusers) {\n        console.log(newUser);\n\n        if (error) {\n          console.log('error');\n          var response = error.message;\n\n          _this6.res.json({\n            error: response\n          });\n        } else {\n          _this6.res.json(realestateusers);\n        }\n      });\n      console.log(newUser);\n    }\n  }]);\n\n  return TaskManager;\n}();\n\n//# sourceURL=webpack:///./src/server/controllers/users.js?");

/***/ }),

/***/ "./src/server/models/signUp.js":
/*!*************************************!*\
  !*** ./src/server/models/signUp.js ***!
  \*************************************/
/*! exports provided: registerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerUser\", function() { return registerUser; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"];\nvar ObjectId = Schema.ObjectId;\nvar LoginSchema = new Schema({\n  id: ObjectId,\n  fullName: {\n    type: String,\n    required: true\n  },\n  Email: {\n    type: String,\n    required: true\n  },\n  NationalIdNIN: {\n    type: String,\n    required: true\n  },\n  PhoneNumber: {\n    type: String,\n    required: [true, 'User phone number required']\n  },\n  Password: {\n    type: String,\n    required: true\n  },\n  RetypePassword: {\n    type: String,\n    required: true\n  }\n});\nvar registerUser = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"]('realestateusers', LoginSchema);\n\n\n//# sourceURL=webpack:///./src/server/models/signUp.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/users */ \"./src/server/controllers/users.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webpack.config.js */ \"./webpack.config.js\");\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_3__[\"config\"]();\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_4___default()(_webpack_config_js__WEBPACK_IMPORTED_MODULE_6___default.a);\nvar databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/realEstate';\nmongoose__WEBPACK_IMPORTED_MODULE_1__[\"connect\"](databaseUrl, {\n  useNewUrlParser: true\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\nvar port = process.env.PORT || 3000;\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler, {\n  publicPath: _webpack_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.output.publicPath\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_7___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_7___default.a.json());\napp.get('/api/tasks', function (req, res) {\n  return new _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"TaskManager\"](req, res).find();\n});\napp.get('/api/task/:id', function (req, res) {\n  return new _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"TaskManager\"](req, res).findTaskById();\n});\napp[\"delete\"]('/api/task/:id', function (req, res) {\n  return new _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"TaskManager\"](req, res).deleteTask(req.params.id);\n});\napp.post('/api/task', function (req, res) {\n  return new _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"TaskManager\"](req, res).insertTask();\n});\napp.put('/api/task/:id', function (req, res) {\n  return new _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"TaskManager\"](req, res).updateTask();\n});\napp.post('/api/register/user', function (req, res) {\n  return new _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"TaskManager\"](req, res).insertUser();\n});\napp.listen(port, function () {\n  return console.log(\"Server listening on http://127.0.0.1:\".concat(port));\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\"); //eslint-disable-line\n\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: './src/index.js'\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  target: 'web',\n  devtool: 'source-map',\n  mode: 'development',\n  module: {\n    rules: [{\n      test: /\\.js|jsx$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader'\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins\n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader' // options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      loader: \"file-loader\",\n      options: {\n        name: '/static/[name].[ext]'\n      }\n    }]\n  },\n  resolve: {\n    extensions: ['*', '.js', '.jsx']\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: './src/index.html',\n    filename: './index.html',\n    excludeChunks: ['server']\n  })]\n};\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ })

/******/ });