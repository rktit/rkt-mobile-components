import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import InputText from './InputText';
import { View, Text as TextNative } from 'react-native';
import { InputStyle } from '../../styles/inputStyle';
const Input = ({
  control,
  name
}) => {
  const [actived, setActived] = useState(false);
  const [error, setError] = useState();
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(InputStyle, {
    actived: actived,
    error: !error
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    render: ({
      field: {
        onChange,
        value
      },
      fieldState: {
        error
      }
    }) => {
      setError(error);
      return /*#__PURE__*/React.createElement(InputText, {
        defaultValue: value,
        label: "nome do titular do cart\xE3o",
        onChangeText: onChange,
        onFocus: () => setActived(true),
        onBlur: () => setActived(false)
      });
    }
  }))), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/React.createElement(TextNative, null, error === null || error === void 0 ? void 0 : error.message, "."));
};
export default Input;
//# sourceMappingURL=index.js.map