import {
  type Control,
  type FieldErrors,
  type FieldValues,
  type SubmitHandler,
  type UseFormHandleSubmit,
  useForm,
} from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const loginFormSchema = Yup.object({
  email: Yup.string().email("E-mail inválido").required("Email é obrigatório"),
});

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

const useInputs = (): ILogin => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginFormSchema),
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      email: "email@email.com",
    },
  });

  console.log("🚀 ~ useLoginForm ~ errors, isValid:", errors, isValid)

  const onSubmit = (data: FieldValues) => {
    console.log("🚀 ~ useLoginForm ~ data:", data)
  };

  return {
    control,
    reset,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
  };
};


export default useInputs;
