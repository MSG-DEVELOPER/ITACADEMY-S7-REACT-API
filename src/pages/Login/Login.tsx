
import {
  RegisterWrapper,
  Title,
  Form,
  Input,
  SubmitButton,
} from "../Register/Register.style";



function Login() {
  return (
    <RegisterWrapper>
      <Title>Iniciar sesión</Title>

      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <SubmitButton type="submit">Entrar</SubmitButton>
      </Form>
    </RegisterWrapper>
  );
}

export default Login;
