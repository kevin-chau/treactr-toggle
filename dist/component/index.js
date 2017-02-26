'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FxToggle = exports.Kill = exports.Toggle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _on = require('./on');

var _on2 = _interopRequireDefault(_on);

var _off = require('./off');

var _off2 = _interopRequireDefault(_off);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleFocus = _this.setState.bind(_this, { hasFocus: true }, function () {});
    _this.handleBlur = _this.setState.bind(_this, { hasFocus: false }, function () {});
    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
    _this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({ checked: !!nextProps.checked });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var checkbox = this.input;
      if (event.target !== checkbox && !this.moved) {
        this.previouslyChecked = checkbox.checked;
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      this.setState({ checked: checkbox.checked });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.startX = (0, _util.pointerCoord)(event).x;
      this.activated = true;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (!this.activated) return;
      this.moved = true;

      if (this.startX) {
        var currentX = (0, _util.pointerCoord)(event).x;
        if (this.state.checked && currentX + 15 < this.startX) {
          this.setState({ checked: false });
          this.startX = currentX;
          this.activated = true;
        } else if (currentX - 15 > this.startX) {
          this.setState({ checked: true });
          this.startX = currentX;
          this.activated = currentX < this.startX + 5;
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      if (!this.moved) return;
      var checkbox = this.input;
      event.preventDefault();

      if (this.startX) {
        var endX = (0, _util.pointerCoord)(event).x;
        if (this.previouslyChecked === true && this.startX + 4 > endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: false });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        } else if (this.startX - 4 < endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: true });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        }

        this.activated = false;
        this.startX = null;
        this.moved = false;
      }
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icons = this.props.icons;

      if (!icons) {
        return null;
      }
      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _icons = _props.icons,
          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);

      var classes = (0, _classnames2.default)('treactr-toggle', {
        'treactr-toggle--checked': this.state.checked,
        'treactr-toggle--focus': this.state.hasFocus,
        'treactr-toggle--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'treactr-toggle-track' },
          _react2.default.createElement(
            'div',
            { className: 'treactr-toggle-track-check' },
            this.getIcon('checked')
          ),
          _react2.default.createElement(
            'div',
            { className: 'treactr-toggle-track-x' },
            this.getIcon('unchecked')
          )
        ),
        _react2.default.createElement('div', { className: 'treactr-toggle-thumb' }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'treactr-toggle-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Toggle;
}(_react.PureComponent);

Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: _react2.default.createElement(_on2.default, null),
    unchecked: _react2.default.createElement(_off2.default, null)
  }
};

Toggle.propTypes = {
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  className: _react.PropTypes.string,
  name: _react.PropTypes.string,
  value: _react.PropTypes.string,
  id: _react.PropTypes.string,
  'aria-labelledby': _react.PropTypes.string,
  'aria-label': _react.PropTypes.string,
  icons: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.shape({
    checked: _react.PropTypes.node,
    unchecked: _react.PropTypes.node
  })])
};

var Kill = function (_Toggle) {
  _inherits(Kill, _Toggle);

  function Kill() {
    _classCallCheck(this, Kill);

    return _possibleConstructorReturn(this, (Kill.__proto__ || Object.getPrototypeOf(Kill)).apply(this, arguments));
  }

  _createClass(Kill, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          className = _props2.className,
          _icons = _props2.icons,
          inputProps = _objectWithoutProperties(_props2, ['className', 'icons']);

      var classes = (0, _classnames2.default)('treactr-kill', {
        'treactr-kill--checked': this.state.checked,
        'treactr-kill--focus': this.state.hasFocus,
        'treactr-kill--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'treactr-kill-track' },
          _react2.default.createElement('div', { className: 'treactr-kill-track-check' }),
          _react2.default.createElement('div', { className: 'treactr-kill-track-x' })
        ),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref2) {
            _this4.input = _ref2;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'treactr-kill-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Kill;
}(Toggle);

var FxToggle = function (_Toggle2) {
  _inherits(FxToggle, _Toggle2);

  function FxToggle() {
    _classCallCheck(this, FxToggle);

    return _possibleConstructorReturn(this, (FxToggle.__proto__ || Object.getPrototypeOf(FxToggle)).apply(this, arguments));
  }

  _createClass(FxToggle, [{
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props3 = this.props,
          className = _props3.className,
          _icons = _props3.icons,
          inputProps = _objectWithoutProperties(_props3, ['className', 'icons']);

      var classes = (0, _classnames2.default)('treactr-kill', {
        'treactr-kill--checked': this.state.checked,
        'treactr-kill--focus': this.state.hasFocus,
        'treactr-kill--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'treactr-kill-track' },
          _react2.default.createElement('div', { className: 'treactr-kill-track-check' }),
          _react2.default.createElement('div', { className: 'treactr-kill-track-x' })
        ),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref3) {
            _this6.input = _ref3;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'treactr-kill-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return FxToggle;
}(Toggle);

exports.Toggle = Toggle;
exports.Kill = Kill;
exports.FxToggle = FxToggle;