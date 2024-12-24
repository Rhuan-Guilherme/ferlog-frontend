import { useState } from 'react';
import {
  ButtonLogin,
  ButtonVisibility,
  FormContainer,
  InputContent,
} from './styled';
import { Eye, EyeSlash } from 'phosphor-react';

export function Login() {
  const [viewPassword, setViewPassword] = useState('password');

  const handlePasswordVisibility = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setViewPassword(viewPassword === 'password' ? 'text' : 'password');
  };

  return (
    <FormContainer>
      <h1>
        Entre em <br /> sua conta
      </h1>
      <InputContent>
        <label htmlFor="">Email</label>
        <input type="text" />
      </InputContent>
      <InputContent>
        <label htmlFor="">Senha</label>
        <input type={viewPassword} />

        <ButtonVisibility onClick={handlePasswordVisibility}>
          {viewPassword === 'password' ? (
            <EyeSlash size={20} />
          ) : (
            <Eye size={20} />
          )}
        </ButtonVisibility>
      </InputContent>
      <div>
        <ButtonLogin>ENTRAR</ButtonLogin>
      </div>
    </FormContainer>
  );
}
