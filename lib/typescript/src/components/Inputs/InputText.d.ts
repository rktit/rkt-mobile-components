/// <reference types="react" />
import { type FieldError } from "react-hook-form";
interface InputsProps {
    defaultValue?: string;
    label?: string;
    maxLength?: number;
    placeholder?: string;
    helperText?: FieldError;
    onFocus?: () => void;
    onChangeText?: () => void;
    onBlur?: () => void;
}
declare const InputText: (props: InputsProps) => JSX.Element;
export default InputText;
//# sourceMappingURL=InputText.d.ts.map