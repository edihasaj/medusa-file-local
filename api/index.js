"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = _express["default"].Router;

var _default = function _default() {
  var _process$env$UPLOAD_D;

  var route = Router();
  var uploadDir = (_process$env$UPLOAD_D = process.env.UPLOAD_DIR) !== null && _process$env$UPLOAD_D !== void 0 ? _process$env$UPLOAD_D : "uploads/images";
  route.use("/".concat(uploadDir), _express["default"]["static"](uploadDir));
  return route;
};

exports["default"] = _default;