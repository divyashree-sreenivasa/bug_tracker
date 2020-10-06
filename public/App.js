"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var bugs = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];

var BugFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(BugFilter, _React$Component);

  var _super = _createSuper(BugFilter);

  function BugFilter() {
    _classCallCheck(this, BugFilter);

    return _super.apply(this, arguments);
  }

  _createClass(BugFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the bug filter.");
    }
  }]);

  return BugFilter;
}(React.Component);

var BugRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(BugRow, _React$Component2);

  var _super2 = _createSuper(BugRow);

  function BugRow() {
    _classCallCheck(this, BugRow);

    return _super2.apply(this, arguments);
  }

  _createClass(BugRow, [{
    key: "render",
    value: function render() {
      var bug = this.props.bug;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, bug.id), /*#__PURE__*/React.createElement("td", null, bug.status), /*#__PURE__*/React.createElement("td", null, bug.owner), /*#__PURE__*/React.createElement("td", null, bug.created.toDateString()), /*#__PURE__*/React.createElement("td", null, bug.effort), /*#__PURE__*/React.createElement("td", null, bug.due ? bug.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, bug.title));
    }
  }]);

  return BugRow;
}(React.Component);

var BugTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(BugTable, _React$Component3);

  var _super3 = _createSuper(BugTable);

  function BugTable() {
    _classCallCheck(this, BugTable);

    return _super3.apply(this, arguments);
  }

  _createClass(BugTable, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: "1px solid lightblue",
        padding: 5
      };
      var bugRows = bugs.map(function (bug) {
        return /*#__PURE__*/React.createElement(BugRow, {
          key: bug.id,
          bug: bug
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created Date"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, bugRows));
    }
  }]);

  return BugTable;
}(React.Component);

var BugAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(BugAdd, _React$Component4);

  var _super4 = _createSuper(BugAdd);

  function BugAdd() {
    _classCallCheck(this, BugAdd);

    return _super4.apply(this, arguments);
  }

  _createClass(BugAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add a bug.");
    }
  }]);

  return BugAdd;
}(React.Component);

var BugList = /*#__PURE__*/function (_React$Component5) {
  _inherits(BugList, _React$Component5);

  var _super5 = _createSuper(BugList);

  function BugList() {
    _classCallCheck(this, BugList);

    return _super5.apply(this, arguments);
  }

  _createClass(BugList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Bug Tracker"), /*#__PURE__*/React.createElement(BugFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BugTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BugAdd, null));
    }
  }]);

  return BugList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(BugList, null);
ReactDOM.render(element, document.getElementById("content"));