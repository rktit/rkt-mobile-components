import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
export const loginFormSchema = Yup.object({
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
  } = useForm({
    resolver: yupResolver(loginFormSchema),
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
export default useInputs;
//# sourceMappingURL=InputHooks.js.map