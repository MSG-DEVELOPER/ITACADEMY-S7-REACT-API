import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../bbdd/config";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

import {
  RegisterWrapper,
  Title,
  Form,
  Input,
  SubmitButton,
} from "../Register/Register.style";

type FormData = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit, formState, reset } = useForm<FormData>();
  const { errors } = formState;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const urlDestiy = location.state?.from?.pathname || "/";

  async function onSubmit(data: FormData) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      dispatch(
        login({
          email: user.email,
          uid: user.uid,
        })
      );

      reset();
      navigate(urlDestiy, { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        alert("❌ Error al iniciar sesión => " + error.message);
      } else {
        alert("❌ Error desconocido al iniciar sesión");
      }
    }
  }

  return (
    <RegisterWrapper>
      <Title>Iniciar sesión</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: "campo obligatorio" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: "*Campo obligatorio" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <SubmitButton type="submit">Entrar</SubmitButton>
      </Form>
    </RegisterWrapper>
  );
}

export default Login;
