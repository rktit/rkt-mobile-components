"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFormSchema = exports.default = void 0;
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
var Yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const loginFormSchema = exports.loginFormSchema = Yup.object({
  email: Yup.string().email("E-mail inválido").required("Email é obrigatório")
});
const useInputs = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = (0, _reactHookForm.useForm)({
    resolver: (0, _yup.yupResolver)(loginFormSchema),
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      email: "email@email.com"
    }
  });
  console.log("🚀 ~ useLoginForm ~ errors, isValid:", errors, isValid);
  const onSubmit = data => {
    console.log("🚀 ~ useLoginForm ~ data:", data);
  };
  return {
    control,
    reset,
    handleSubmit,
    onSubmit,
    errors,
    isValid
  };
};
var _default = exports.default = useInputs;
//# sourceMappingURL=InputHooks.js.map