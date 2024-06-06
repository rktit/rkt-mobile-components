"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _reactI18next = require("react-i18next");
var _ptBr = _interopRequireDefault(require("./pt-br.json"));
var _enUs = _interopRequireDefault(require("./en-us.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_i18next.default.use(_reactI18next.initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ptBR',
  resources: {
    ptBR: _ptBr.default,
    enUS: _enUs.default
  },
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  }
});
var _default = exports.default = _i18next.default;
//# sourceMappingURL=i18n.js.map