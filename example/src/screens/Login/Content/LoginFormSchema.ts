import * as Yup from 'yup';

export const loginFormSchema = Yup.object({
  email: Yup.string().email("E-mail inválido").required("Email é obrigatório"),
  password: Yup.string().min(8).max(32).required("Senha é obrigatória"),
});