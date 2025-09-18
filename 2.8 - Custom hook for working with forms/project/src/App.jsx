import React from 'react'
import { LoginForm } from './components/LoginForm'
import { RegisterForm } from './components/RegisterForm'
import { useForm } from './hooks/useForm';

export const App = () => {
  const loginForm = useForm({});
  const registerForm = useForm({});

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(`Данные авторизации: ${JSON.stringify(loginForm.formData, null, 4)}`);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(`Данные регистрации: ${JSON.stringify(registerForm.formData, null, 4)}`);
  };

  return (
    <div className="flex flex-col container mx-auto gap-8">
      <div className="flex flex-col gap-4">
        <h1>Авторизация</h1>
        <LoginForm
          {...loginForm}
          handleSubmit={handleLoginSubmit}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1>Регистрация</h1>
        <RegisterForm
          {...registerForm}
          handleSubmit={handleRegisterSubmit}
        />
      </div>
    </div>
  )
};
