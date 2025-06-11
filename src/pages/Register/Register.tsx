import {
  RegisterWrapper,
  Title,
  Form,
  Input,
  SubmitButton,
} from "./Register.style";

function Register() {
  return (
    <RegisterWrapper>
      <Title>Crear cuenta</Title>

      <Form>
        <Input type="text" name="username" placeholder="Nombre de usuario" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <Input type="password" name="confirmPassword" placeholder="Confirmar contraseña" />

        <SubmitButton type="submit">Registrarse</SubmitButton>
      </Form>
    </RegisterWrapper>
  );
}

export default Register;
