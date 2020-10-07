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

var initialBugs = [{
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

function BugRow(props) {
  var bug = props.bug;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, bug.id), /*#__PURE__*/React.createElement("td", null, bug.status), /*#__PURE__*/React.createElement("td", null, bug.owner), /*#__PURE__*/React.createElement("td", null, bug.created.toDateString()), /*#__PURE__*/React.createElement("td", null, bug.effort), /*#__PURE__*/React.createElement("td", null, bug.due ? bug.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, bug.title));
}

function BugTable(props) {
  var bugRows = props.bugs.map(function (bug) {
    return /*#__PURE__*/React.createElement(BugRow, {
      key: bug.id,
      bug: bug
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created Date"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, bugRows));
}

var BugAdd = /*#__PURE__*/function (_React$Component2) {
  _inherits(BugAdd, _React$Component2);

  var _super2 = _createSuper(BugAdd);

  function BugAdd() {
    var _this;

    _classCallCheck(this, BugAdd);

    _this = _super2.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BugAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.bugAdd;
      var bug = {
        owner: form.owner.value,
        title: form.title.value,
        status: 'New'
      };
      this.props.createBug(bug);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "bugAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return BugAdd;
}(React.Component);

var BugList = /*#__PURE__*/function (_React$Component3) {
  _inherits(BugList, _React$Component3);

  var _super3 = _createSuper(BugList);

  function BugList() {
    var _this2;

    _classCallCheck(this, BugList);

    _this2 = _super3.call(this);
    _this2.state = {
      bugs: []
    };
    _this2.createBug = _this2.createBug.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(BugList, [{
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          bugs: initialBugs
        });
      }, 500);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "createBug",
    value: function createBug(bug) {
      bug.id = this.state.bugs.length + 1;
      bug.created = new Date();
      var newBugsList = this.state.bugs.slice();
      newBugsList.push(bug);
      this.setState({
        bugs: newBugsList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Bug Tracker"), /*#__PURE__*/React.createElement(BugFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BugTable, {
        bugs: this.state.bugs
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BugAdd, {
        createBug: this.createBug
      }));
    }
  }]);

  return BugList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(BugList, null);
ReactDOM.render(element, document.getElementById("content"));