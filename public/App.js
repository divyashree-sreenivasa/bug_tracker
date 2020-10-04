"use strict";

var element = /*#__PURE__*/React.createElement("div", {
  title: "outer-div"
}, /*#__PURE__*/React.createElement("h1", null, "Bug Tracker"));
ReactDOM.render(element, document.getElementById("content"));