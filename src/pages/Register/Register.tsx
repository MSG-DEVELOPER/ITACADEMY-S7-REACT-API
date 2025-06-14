import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../bbdd/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

import {
  RegisterWrapper,
  Title,
  Form,
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
      <Title>Crear cuenta</Title>

      <Form onSubmit={handleSubmit(validateForm)}>
        <Input
          type="text"
          placeholder="Username"
          {...register("username", { required: "*Obligatorio" })}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}

        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "*Obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "*Obligatorio",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "*Obligatorio",
            validate: (valuee) =>
              valuee === password ? true : "Contraseñas no coinciden",
          })}
        />
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}

        <SubmitButton type="submit">Registrarse</SubmitButton>
      </Form>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </RegisterWrapper>
  );
}

export default Register;
