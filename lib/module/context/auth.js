import React, { createContext, useState } from "react";
const AuthContext = /*#__PURE__*/createContext(null);
const AuthProvider = ({
  children
}) => {
  const [person, setPerson] = useState(null);
  const updatePerson = value => {
    setPerson(value);
  };
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: {
      person,
      updatePerson
    }
  }, children);
};
export { AuthContext, AuthProvider };
//# sourceMappingURL=auth.js.map