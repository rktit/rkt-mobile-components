import React, { useState } from 'react';
import { type Control, Controller, type FieldError } from 'react-hook-form';
import InputText from './InputText';
import { View, Text as TextNative } from 'react-native';
import { InputStyle } from '../../styles/inputStyle';

interface IInputController {
  control: Control<any>;
  name: string;
}

const Input = ({ control, name }: IInputController) => {
  const [actived, setActived] = useState(false);
  const [error, setError] = useState<FieldError>();
  return (
    <View>
      <InputStyle actived={actived} error={!error}>
        <View style={{ width: '100%' }}>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              setError(error);
              return (
                <InputText
                  defaultValue={value}
                  label="nome do titular do cartão"
                  onChangeText={onChange}
                  onFocus={() => setActived(true)}
                  onBlur={() => setActived(false)}
                />
              );
            }}
          />
        </View>
      </InputStyle>
      {error?.message && <TextNative>{error?.message}.</TextNative>}
    </View>
  );
};

export default Input;
