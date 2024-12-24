import { ButtonLogin, FormContainer, InputContent } from './styled';

export function Login() {
  return (
    <FormContainer>
      <h1>
        Entre em <br /> sua conta
      </h1>
      <InputContent>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="E-mail" />
      </InputContent>
      <InputContent>
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Senha" />
      </InputContent>
      <div>
        <ButtonLogin>ENTRAR</ButtonLogin>
      </div>
    </FormContainer>
  );
}
