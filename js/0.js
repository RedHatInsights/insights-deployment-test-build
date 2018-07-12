(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/PresentationalComponents/SampleComponent/sample-component.js":
/*!**************************************************************************!*\
  !*** ./src/PresentationalComponents/SampleComponent/sample-component.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(/*! ./sample-component.scss */ "./src/PresentationalComponents/SampleComponent/sample-component.scss");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */
var SampleComponent = function SampleComponent(props) {
    return _react2.default.createElement(
        'span',
        { className: 'sample-component' },
        ' ',
        props.children,
        ' '
    );
};

SampleComponent.displayName = 'SampleComponent';

SampleComponent.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

exports.default = SampleComponent;

/***/ }),

/***/ "./src/PresentationalComponents/SampleComponent/sample-component.scss":
/*!****************************************************************************!*\
  !*** ./src/PresentationalComponents/SampleComponent/sample-component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/0.js.map