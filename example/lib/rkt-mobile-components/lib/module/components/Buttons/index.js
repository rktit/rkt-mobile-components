import React from "react";
import BtnTransparent from "./ButtonTransparent";
import Button from "./Button";
import BtnIcon from "./ButtonIcon";
const ButtonComponent = props => {
  switch (props.variant) {
    case "link":
      return /*#__PURE__*/React.createElement(BtnTransparent, props);
    case "icon":
      return /*#__PURE__*/React.createElement(BtnIcon, props);
    default:
      return /*#__PURE__*/React.createElement(Button, props);
  }
};
export default ButtonComponent;
//# sourceMappingURL=index.js.map