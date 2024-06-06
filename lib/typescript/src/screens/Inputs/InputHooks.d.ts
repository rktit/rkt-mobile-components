import { type Control, type FieldErrors, type FieldValues, type SubmitHandler, type UseFormHandleSubmit } from "react-hook-form";
import * as Yup from 'yup';
export declare const loginFormSchema: Yup.ObjectSchema<{
    email: string;
}, Yup.AnyObject, {
    email: undefined;
}, "">;
export interface IFormLogin {
    email: string;
}
interface ILogin {
    control: Control<IFormLogin>;
    reset: () => void;
    handleSubmit: UseFormHandleSubmit<IFormLogin>;
    onSubmit: SubmitHandler<FieldValues>;
    errors: FieldErrors<IFormLogin>;
    isValid: boolean;
}
declare const useInputs: () => ILogin;
export default useInputs;
//# sourceMappingURL=InputHooks.d.ts.map