import { ChangeEvent, useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/input';
import useLogin from '../../../shared/hooks/useLogin';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

interface FormLogin {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { loginData, loading } = useLogin();

  const [formValues, setFormValues] = useState<FormLogin>({
    email: '',
    password: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit() {
    loginData({
      email: formValues.email,
      password: formValues.password,
    });
  }

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            description="Email"
            margin="32px 0px 0px"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <Input
            description="Senha"
            margin="32px 0px 0px"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
          <Button
            loading={loading}
            type="primary"
            margin="64px 0px 16px 0px"
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
}
