import { useForm } from "react-hook-form";

import {
  RegisterWrapper,
  Title,
  Form,
  Input,
  SubmitButton,
} from "./Register.style";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const { errors } = formState;

  function validateForm(data: FormData) {
    console.log(data);
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
        {errors.username && <p>{errors.username.message}</p>}

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
        {errors.email && <p>{errors.email.message}</p>}

        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: "*Obligatorio" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: "*Obligatorio" })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <SubmitButton type="submit">Registrarse</SubmitButton>
      </Form>
    </RegisterWrapper>
  );
}

export default Register;
