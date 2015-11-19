/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _es6Docready = __webpack_require__(2);

	var _es6Docready2 = _interopRequireDefault(_es6Docready);

	var _es6Dom = __webpack_require__(3);

	var _es6Dom2 = _interopRequireDefault(_es6Dom);

	var _srcPicker = __webpack_require__(4);

	var _srcPicker2 = _interopRequireDefault(_srcPicker);

	(0, _es6Docready2['default'])(function () {

	    var OptionBox = _react2['default'].createClass({
	        displayName: 'OptionBox',

	        propTypes: {
	            value: _react2['default'].PropTypes.string,
	            onClick: _react2['default'].PropTypes.func
	        },
	        getInitialState: function getInitialState() {
	            return {
	                value: this.props.value || 'N/A'
	            };
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                value: nextProps.value || 'N/A'
	            });
	        },

	        render: function render() {

	            return _react2['default'].createElement(
	                'div',
	                { className: 'box', onClick: this._handleClick },
	                _react2['default'].createElement(
	                    'label',
	                    null,
	                    this.state.value
	                )
	            );
	        },

	        _handleClick: function _handleClick(e) {
	            this.props.onClick && this.props.onClick(e);
	        }
	    });

	    var Cars = [{
	        text: 'ASTON MARTIN',
	        value: '1001',
	        series: [{
	            text: 'Cygnet',
	            value: '100101'
	        }, {
	            text: 'V8 Vantage',
	            value: '100102'
	        }, {
	            text: 'V12 Vantage',
	            value: '100103'
	        }, {
	            text: 'DB9',
	            value: '100104'
	        }, {
	            text: 'DBS',
	            value: '100105'
	        }, {
	            text: 'Virage',
	            value: '100106'
	        }]
	    }, {
	        text: 'AUDI',
	        value: '1002',
	        series: [{
	            text: 'A4 Allroad',
	            value: '100201'
	        }, {
	            text: 'A5',
	            value: '100202'
	        }, {
	            text: 'A6',
	            value: '100203'
	        }, {
	            text: 'A7',
	            value: '100204'
	        }, {
	            text: 'A8L',
	            value: '100205'
	        }, {
	            text: 'Q3',
	            value: '100206'
	        }, {
	            text: 'Q5',
	            value: '100207'
	        }, {
	            text: 'Q7',
	            value: '100208'
	        }]
	    }, {
	        text: 'PORSCHE',
	        value: '1003',
	        series: [{
	            text: 'Boxster',
	            value: '100301'
	        }, {
	            text: 'Cayman',
	            value: '100302'
	        }, {
	            text: '911',
	            value: '100303'
	        }, {
	            text: '918',
	            value: '100304'
	        }, {
	            text: 'Panamera',
	            value: '100305'
	        }, {
	            text: 'Macan',
	            value: '100306'
	        }]
	    }];

	    var List = _react2['default'].createClass({
	        displayName: 'List',

	        propTypes: {
	            fruit: _react2['default'].PropTypes.string,
	            brand: _react2['default'].PropTypes.string,
	            serial: _react2['default'].PropTypes.string
	        },
	        getInitialState: function getInitialState() {
	            return {
	                fruit: this.props.fruit,
	                brand: this.props.brand,
	                serial: this.props.serial,
	                brands: Cars,
	                series: this.getCarSeries(this.props.brand)
	            };
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                fruit: nextProps.fruit,
	                brand: nextProps.brand,
	                serial: nextProps.serial
	            });
	        },

	        componentDidMount: function componentDidMount() {},

	        render: function render() {

	            var fruit = this.state.fruit,
	                brand = this.state.brand,
	                serial = this.state.serial;

	            return _react2['default'].createElement(
	                'ul',
	                null,
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        'label',
	                        null,
	                        'Choice X'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'edit' },
	                        _react2['default'].createElement(
	                            _srcPicker2['default'],
	                            {
	                                ref: 'fruitSelection',
	                                value: fruit,
	                                options: ['Mango', 'Orange', 'Avocado', 'Pineapple', 'Jack Fruit', 'Durian', 'Apricot', 'Carambola', 'Dateplum Persimmon', 'Megranate'],
	                                onChange: this._handleFruitChange
	                            },
	                            _react2['default'].createElement(OptionBox, { value: fruit, onClick: this._handleClickFruit })
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        'label',
	                        null,
	                        'Choice Y'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'edit' },
	                        _react2['default'].createElement(
	                            _srcPicker2['default'],
	                            {
	                                ref: 'carSelection',
	                                value: [brand, serial],
	                                options: [this.state.brands, this.state.series],
	                                onChange: this._handleCarChange
	                            },
	                            _react2['default'].createElement(OptionBox, { value: this.getCarText(brand, serial), onClick: this._handleClickCar })
	                        )
	                    )
	                )
	            );
	        },

	        _handleClickFruit: function _handleClickFruit(e) {
	            this.refs.fruitSelection.show();
	        },

	        _handleFruitChange: function _handleFruitChange(value, text) {
	            this.setState({ fruit: value });
	        },

	        _handleClickCar: function _handleClickCar(e) {
	            this.refs.carSelection.show();
	        },

	        _handleCarChange: function _handleCarChange(value, text, listIndex) {
	            var _this = this;

	            if (listIndex === 0) {
	                window.clearTimeout(this._updateCarTimer);
	                this._updateCarTimer = window.setTimeout(function () {
	                    var series = _this.getCarSeries(value);
	                    _this.setState({
	                        series: series,
	                        brand: value,
	                        serial: series.length > 0 ? series[0].value : ''
	                    });
	                }, 250);
	            } else if (listIndex === 1) {
	                this.setState({ serial: value });
	            }
	        },

	        getCarSeries: function getCarSeries(brand) {
	            for (var i = 0; i < Cars.length; i++) {
	                if (Cars[i].value === brand) return Cars[i].series;
	            }
	            return [];
	        },

	        getCarText: function getCarText(brand, serial) {
	            var series = undefined,
	                b = undefined,
	                s = undefined;
	            for (var i = 0; i < Cars.length; i++) {
	                if (Cars[i].value === brand) {
	                    series = Cars[i].series;
	                    b = Cars[i].text;
	                    break;
	                }
	            }

	            if (!series) return;
	            for (var i = 0; i < series.length; i++) {
	                if (series[i].value === serial) {
	                    s = series[i].text;
	                    break;
	                }
	            }

	            return b && s ? b + ' - ' + s : undefined;
	        }
	    });

	    var Main = _react2['default'].createClass({
	        displayName: 'Main',

	        propTypes: {
	            value: _react2['default'].PropTypes.string,
	            onClick: _react2['default'].PropTypes.func
	        },
	        getInitialState: function getInitialState() {
	            return {
	                value: this.props.value
	            };
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                value: nextProps.value
	            });
	        },

	        render: function render() {

	            return _react2['default'].createElement(
	                'div',
	                { className: 'list-area' },
	                _react2['default'].createElement(List, { fruit: 'Avocado' })
	            );
	        }
	    });

	    _react2['default'].render(_react2['default'].createElement(Main, null), _es6Dom2['default'].nodeById("page-container"));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = docReady;

	function docReady(callback) {

	    function completed() {
	        document.removeEventListener("DOMContentLoaded", completed, false);
	        window.removeEventListener("load", completed, false);
	        callback();
	    }

	    //Events.on(document, 'DOMContentLoaded', completed)

	    if (document.readyState === "complete") {
	        // Handle it asynchronously to allow scripts the opportunity to delay ready
	        setTimeout(callback);
	    } else {

	        // Use the handy event callback
	        document.addEventListener("DOMContentLoaded", completed, false);

	        // A fallback to window.onload, that will always work
	        window.addEventListener("load", completed, false);
	    }
	}

	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var dom = {

	    isDescendant: function isDescendant(parent, child) {
	        var node = child.parentNode;

	        while (node !== null) {
	            if (node === parent) return true;
	            node = node.parentNode;
	        }

	        return false;
	    },

	    offset: function offset(el) {
	        var rect = el.getBoundingClientRect();
	        return {
	            top: rect.top + document.body.scrollTop,
	            left: rect.left + document.body.scrollLeft
	        };
	    },

	    getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
	        var attrStyle = el.style[attr];
	        var attrNum = 0;
	        if (attrStyle && attrStyle.length) {
	            attrNum = parseInt(attrStyle);
	        }

	        return attrNum;
	    },

	    addClass: function addClass(el, className) {
	        if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	    },

	    removeClass: function removeClass(el, className) {
	        if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    },

	    hasClass: function hasClass(el, className) {
	        if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	    },

	    toggleClass: function toggleClass(el, className) {
	        if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
	    },

	    forceRedraw: function forceRedraw(el) {
	        var originalDisplay = el.style.display;

	        el.style.display = 'none';
	        el.offsetHeight;
	        el.style.display = originalDisplay;
	    },

	    withoutTransition: function withoutTransition(el, callback) {
	        var originalTransition = el.style.transition;

	        //turn off transition
	        el.style.transition = null;

	        callback();

	        //force a redraw
	        this.forceRedraw(el);

	        //put the transition back
	        el.style.transition = originalTransition;
	    },

	    nodeById: function nodeById(id) {
	        return document.getElementById(id);
	    },

	    nodeBySelector: function nodeBySelector(el, s) {
	        return (el || document).querySelector(s);
	    },

	    nodesBySelector: function nodesBySelector(el, s) {
	        return (el || document).querySelectorAll(s);
	    },

	    text: function text(el, _text) {
	        if (typeof _text === 'string') {
	            el && (el.innerText = _text);
	            return this;
	        }
	        return el ? el.innerText || el.textContent || '' : '';
	    }

	};

	exports['default'] = dom;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Picker = _react2['default'].createClass({
	    displayName: 'Picker',

	    propTypes: {
	        value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number, _react2['default'].PropTypes.array]).isRequired,
	        options: _react2['default'].PropTypes.array.isRequired,
	        onChange: _react2['default'].PropTypes.func,
	        onShow: _react2['default'].PropTypes.func,
	        onDismiss: _react2['default'].PropTypes.func,
	        onClickAway: _react2['default'].PropTypes.func
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            onChange: function onChange(value, text, idx) {}
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.value,
	            options: this.props.options,
	            open: false
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var _this = this;

	        if (Array.isArray(nextProps.value)) {
	            nextProps.value.forEach(function (v, idx) {
	                if (_this.state.options[idx] && _this.state.options[idx] !== nextProps.options[idx]) {
	                    var node = _react2['default'].findDOMNode(_this.refs['list-' + idx]);
	                    node.scrollTop = _this._scrollStartTop[idx] = 0;
	                }
	            });
	        }
	        this.setState({
	            value: nextProps.value,
	            options: nextProps.options
	        });
	    },

	    optionHeight: 0,
	    componentDidMount: function componentDidMount() {
	        var _this2 = this;

	        var op = this.refs['op-0-0'];
	        if (op) {
	            this.optionHeight = _react2['default'].findDOMNode(op).clientHeight;
	        }
	        this._initValueIndexes.forEach(function (vi, idx) {
	            if (vi > 0) {
	                var node = _react2['default'].findDOMNode(_this2.refs['list-' + idx]);
	                node.scrollTop = _this2._scrollStartTop[idx] = vi * _this2.optionHeight;
	            }
	        });
	    },
	    componentWillUnmount: function componentWillUnmount() {},

	    value: function value() {
	        return this.state.value;
	    },

	    render: function render() {
	        var _this3 = this;

	        var values = this.state.value,
	            __options = this.state.options;
	        if (!Array.isArray(values)) {
	            values = [values];
	            __options = [__options];
	        }

	        var initValueIndexes = [];
	        var style = {
	            width: 100 / __options.length + '%'
	        };
	        var i = -1;
	        var lists = __options.map(function (options) {
	            if (!options) return;
	            i++;
	            var j = -1;
	            return _react2['default'].createElement(
	                'div',
	                {
	                    key: i,
	                    ref: 'list-' + i,
	                    'data-id': i,
	                    className: 'list-wrap',
	                    style: style,
	                    onScroll: _this3._onScroll
	                },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    options.map(function (op) {
	                        j++;
	                        if (typeof op === 'string' || typeof op === 'number') {
	                            op = {
	                                text: op,
	                                value: op
	                            };
	                        } else if (typeof op !== 'object' || !op.text || !op.value) return;

	                        if (String(op.value) === String(values[i])) {
	                            initValueIndexes.push(j);
	                        }

	                        return _react2['default'].createElement(
	                            'li',
	                            { key: j,
	                                ref: 'op-' + i + '-' + j,
	                                'data-id': i + '-' + j,
	                                'data-value': JSON.stringify(op),
	                                onClick: _this3._clickOnOption
	                            },
	                            op.text
	                        );
	                    })
	                )
	            );
	        });

	        this._initValueIndexes = initValueIndexes;

	        return _react2['default'].createElement(
	            'div',
	            { className: ["picker", this.props.className].join(' ') },
	            this.props.children,
	            _react2['default'].createElement(
	                'div',
	                { className: ["container", "table", this.props.className, this.state.open ? "show" : undefined].join(' ') },
	                _react2['default'].createElement('div', { className: 'overlay', onClick: this._handleOverlayTouchTap }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'cell' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: ["popup", this.state.open ? "show" : undefined].join(' ') },
	                        lists,
	                        _react2['default'].createElement('div', { className: 'cover upper' }),
	                        _react2['default'].createElement('div', { className: 'cover lower' })
	                    )
	                )
	            )
	        );
	    },

	    closeable: false,

	    dismiss: function dismiss() {
	        if (this.closeable) {
	            this._onDismiss();
	        }
	    },

	    show: function show() {
	        this._onShow();
	    },

	    _handleOverlayTouchTap: function _handleOverlayTouchTap() {
	        if (this.closeable) {
	            this._onDismiss();
	            this.props.onClickAway && this.props.onClickAway();
	        }
	    },

	    _onShow: function _onShow() {
	        setTimeout((function () {
	            this.closeable = true;
	        }).bind(this), 250);
	        this.setState({ open: true });
	        this.props.onShow && this.props.onShow();
	    },

	    _onDismiss: function _onDismiss() {
	        this.setState({ open: false, loading: false });
	        this.props.onDismiss && this.props.onDismiss();
	    },

	    _onPageScroll: function _onPageScroll(e) {},

	    _scrollStartTop: [],
	    _scrollTimer: undefined,
	    _onScroll: function _onScroll(e) {
	        var _this4 = this;

	        var el = e.target,
	            idx = parseInt(el.dataset ? el.dataset.id : el.getAttribute('data-id'), 10),
	            opHeight = this.optionHeight;

	        window.clearTimeout(this._scrollTimer);
	        this._scrollTimer = window.setTimeout(function () {
	            if (typeof _this4._scrollStartTop[idx] !== 'number') _this4._scrollStartTop[idx] = 0;
	            if (_this4._scrollStartTop[idx] === el.scrollTop) return;

	            var scrollTop = el.scrollTop,
	                mod = scrollTop % opHeight,
	                percent = mod / opHeight;

	            var toLowerItem = function toLowerItem() {
	                var diff = opHeight - mod;
	                scrollTop += diff;
	                el.scrollTop += diff;
	            };
	            var toUpperItem = function toUpperItem() {
	                scrollTop -= mod;
	                el.scrollTop -= mod;
	            };

	            if (scrollTop > _this4._scrollStartTop[idx]) {
	                percent > 0.46 ? toLowerItem() : toUpperItem();
	            } else {
	                percent < 0.64 ? toUpperItem() : toLowerItem();
	            }
	            _this4._scrollStartTop[idx] = scrollTop;

	            var opname = 'op-' + idx + '-' + scrollTop / opHeight;
	            var op = _react2['default'].findDOMNode(_this4.refs[opname]).getAttribute('data-value');
	            if (!op) return;
	            op = JSON.parse(op);

	            var value = _this4.state.value;
	            if (Array.isArray(value)) {
	                value[idx] = op.value;
	            } else {
	                value = op.value;
	            }
	            _this4.setState({
	                value: value
	            });
	            _this4.props.onChange(op.value, op.text, idx);
	        }, 250);
	    },

	    _clickOnOption: function _clickOnOption(e) {
	        var el = e.target,
	            value = el.dataset ? el.dataset.id : el.getAttribute('data-id');
	        if (!value) return;

	        var arr = value.split('-');
	        if (arr.length < 2) return;

	        var _list = this.refs['list-' + arr[0]];
	        if (!_list) return;
	        var list = _react2['default'].findDOMNode(_list);
	        list.scrollTop = this.optionHeight * parseInt(arr[1], 10);
	    }

	});

	exports['default'] = Picker;
	module.exports = exports['default'];

/***/ }
/******/ ]);