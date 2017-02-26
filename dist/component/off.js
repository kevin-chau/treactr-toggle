'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OFF = function (_React$Component) {
  _inherits(OFF, _React$Component);

  function OFF() {
    _classCallCheck(this, OFF);

    return _possibleConstructorReturn(this, (OFF.__proto__ || Object.getPrototypeOf(OFF)).apply(this, arguments));
  }

  _createClass(OFF, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '37', height: '21', viewBox: '0 0 37 21' },
        _react2.default.createElement(
          'text',
          { x: '0', y: '45%', fontWeight: '500', fontSize: '11', fill: '#A9A9A9' },
          'ON'
        )
      );
    }
  }]);

  return OFF;
}(_react2.default.Component);

exports.default = OFF;


var OFF1 = function OFF1() {
  _react2.default.createElement(
    'svg',
    { width: '37', height: '21', viewBox: '0 0 37 21' },
    _react2.default.createElement(
      'text',
      { x: '0', y: '45%', fontWeight: '500', fontSize: '11', fill: '#A9A9A9' },
      '1'
    )
  );
};