import {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";
import { loginFormSchema } from "./LoginFormSchema";
import { yupResolver } from '@hookform/resolvers/yup';

export interface IFormLogin {
  email: string;
  password: string;
}

interface ILogin {
  control: Control<IFormLogin>;
  reset: () => void;
  handleSubmit: UseFormHandleSubmit<IFormLogin>;
  onSubmit: SubmitHandler<FieldValues>;
  errors: FieldErrors<IFormLogin>;
  isValid: boolean;
}

const useLoginForm = (): ILogin => {
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
      password: ""
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


export default useLoginForm;