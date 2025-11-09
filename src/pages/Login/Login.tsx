import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../bbdd/config";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

import {
  LoginWrapper,
  LoginContainer,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Input,
  ErrorMessage,
  SubmitButton,
} from "./Login.style";

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
    <LoginWrapper>
      <LoginContainer>
        <Title>Iniciar sesión</Title>
        <Subtitle>Accede a tu cuenta para continuar</Subtitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", { required: "Este campo es obligatorio" })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputGroup>

          <SubmitButton type="submit">Iniciar sesión</SubmitButton>
        </Form>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default Login;
