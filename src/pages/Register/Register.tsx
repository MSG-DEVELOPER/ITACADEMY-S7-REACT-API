import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../bbdd/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

import {
  RegisterWrapper,
  RegisterContainer,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from "./Register.style";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const { register, handleSubmit, formState, watch, reset } =
    useForm<FormData>();
  const { errors } = formState;
  const password = watch("password");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const dispatch = useDispatch();

  async function validateForm(data: FormData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      dispatch(
        login({
          email: user.email,
          username: data.username, 
          uid: user.uid,
        })
      );
      console.log("✅ Usuario registrado:", userCredential.user);

      setSuccessMessage("Registro exitoso! Bienvenido/a.");
      reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("❌Este email ya está registrado.");
      } else {
        alert("❌ Error al registrar: " + error.message);
      }
    }
  }

  return (
    <RegisterWrapper>
      <RegisterContainer>
        <Title>Crear cuenta</Title>
        <Subtitle>Completa el formulario para registrarte</Subtitle>

        <Form onSubmit={handleSubmit(validateForm)}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Nombre de usuario"
              {...register("username", { required: "Este campo es obligatorio" })}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email no válido",
                },
              })}
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
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              placeholder="Confirmar contraseña"
              {...register("confirmPassword", {
                required: "Este campo es obligatorio",
                validate: (valuee) =>
                  valuee === password ? true : "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </InputGroup>

          <SubmitButton type="submit">Registrarse</SubmitButton>
        </Form>

        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </RegisterContainer>
    </RegisterWrapper>
  );
}

export default Register;
