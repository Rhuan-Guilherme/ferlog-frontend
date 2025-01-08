import { useContext, useState } from 'react';
import {
  ButtonLogin,
  ButtonVisibility,
  FormContainer,
  InputContent,
} from './styled';
import { Eye, EyeSlash } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../../context/UserContext';

interface FormProps {
  email: string;
  password: string;
}

export function LoginForm() {
  const { authenticateUser, error } = useContext(userContext);
  const { register, handleSubmit } = useForm<FormProps>();
  const [viewPassword, setViewPassword] = useState<'password' | 'text'>(
    'password'
  );

  

  const handlePasswordVisibility = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setViewPassword(viewPassword === 'password' ? 'text' : 'password');
  };

  async function handleLoginSubmit({ email, password }: FormProps) {
    authenticateUser(email, password);
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleLoginSubmit)}>
      <h1>
        Entre em <br /> sua conta
      </h1>
      <InputContent>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
      </InputContent>
      <InputContent>
        <label htmlFor="passwrod">Senha</label>
        <input type={viewPassword} id="password" {...register('password')} />

        <ButtonVisibility onClick={handlePasswordVisibility}>
          {viewPassword === 'password' ? (
            <EyeSlash size={20} />
          ) : (
            <Eye size={20} />
          )}
        </ButtonVisibility>
      </InputContent>
        {error && <p style={{color: 'red'}}>{error}</p>}
      <div>
        <ButtonLogin  type="submit">ENTRAR</ButtonLogin>
      </div>
    </FormContainer>
  );
}
