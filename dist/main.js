'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promiseAlert = function promiseAlert() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {

        var paramsObj = void 0;

        if (typeof params[0] === 'string') {
            var title = params[0];
            var text = params[1];
            var type = params[2];

            paramsObj = {
                title: title,
                text: text,
                type: type
            };
        } else if (_typeof(params[0]) === 'object') {
            paramsObj = Object.assign({}, params[0]);
        } else {
            reject(new Error('You must pass in a string or an object as the first parameter of promiseAlert'));
        }

        (0, _sweetalert2.default)(paramsObj, function (res) {
            return resolve(res);
        });
    });
};

exports.default = promiseAlert;