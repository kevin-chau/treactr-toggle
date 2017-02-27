'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ON_MONITOR_CUE = exports.ON2 = exports.ON1 = exports.ON = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ON = function (_React$Component) {
  _inherits(ON, _React$Component);

  function ON() {
    _classCallCheck(this, ON);

    return _possibleConstructorReturn(this, (ON.__proto__ || Object.getPrototypeOf(ON)).apply(this, arguments));
  }

  _createClass(ON, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '37', height: '21', viewBox: '0 0 37 21' },
        _react2.default.createElement(
          'text',
          { x: '0', y: '45%', fontWeight: '500', fontSize: '11', fill: '#34230B' },
          'ON'
        )
      );
    }
  }]);

  return ON;
}(_react2.default.Component);

var ON1 = function (_React$Component2) {
  _inherits(ON1, _React$Component2);

  function ON1() {
    _classCallCheck(this, ON1);

    return _possibleConstructorReturn(this, (ON1.__proto__ || Object.getPrototypeOf(ON1)).apply(this, arguments));
  }

  _createClass(ON1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '21', height: '23', viewBox: '0 0 21 23' },
        _react2.default.createElement(
          'text',
          { x: '63%', y: '40%', fontWeight: '500', fontSize: '11', fill: '#34230B' },
          '1'
        )
      );
    }
  }]);

  return ON1;
}(_react2.default.Component);

var ON2 = function (_React$Component3) {
  _inherits(ON2, _React$Component3);

  function ON2() {
    _classCallCheck(this, ON2);

    return _possibleConstructorReturn(this, (ON2.__proto__ || Object.getPrototypeOf(ON2)).apply(this, arguments));
  }

  _createClass(ON2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '21', height: '23', viewBox: '0 0 21 23' },
        _react2.default.createElement(
          'text',
          { x: '63%', y: '40%', fontWeight: '500', fontSize: '11', fill: '#34230B' },
          '2'
        )
      );
    }
  }]);

  return ON2;
}(_react2.default.Component);

var ON_MONITOR_CUE = function (_React$Component4) {
  _inherits(ON_MONITOR_CUE, _React$Component4);

  function ON_MONITOR_CUE() {
    _classCallCheck(this, ON_MONITOR_CUE);

    return _possibleConstructorReturn(this, (ON_MONITOR_CUE.__proto__ || Object.getPrototypeOf(ON_MONITOR_CUE)).apply(this, arguments));
  }

  _createClass(ON_MONITOR_CUE, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '33', height: '24', viewBox: '0 0 33 24' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-6,20.000000) scale(0.100000,-0.100000)',
            fill: '#34230B', stroke: 'none' },
          _react2.default.createElement('path', { d: 'M102 184 c-27 -18 -29 -66 -6 -112 20 -42 34 -40 34 3 0 27 -5 38 -21 43 -20 8 -20 8 -1 32 27 33 87 33 114 0 19 -24 19 -24 -1 -32 -16 -5 -21 -16 -21 -43 0 -43 14 -45 34 -3 38 75 10 128 -69 128 -22 0 -51 -7 -63 -16z' })
        )
      );
    }
  }]);

  return ON_MONITOR_CUE;
}(_react2.default.Component);

exports.ON = ON;
exports.ON1 = ON1;
exports.ON2 = ON2;
exports.ON_MONITOR_CUE = ON_MONITOR_CUE;