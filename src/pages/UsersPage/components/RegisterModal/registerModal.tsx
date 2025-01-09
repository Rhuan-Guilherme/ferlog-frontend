import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { api } from '../../../../lib/axios';

interface UserRegisterProps {
  name: string;
  email: string;
  telefone: string;
  cargo: string;
}

export function RegisterModal() {
  const { register, handleSubmit, reset } = useForm<UserRegisterProps>();

  async function handleRegisterSubmit(data: UserRegisterProps) {
    try {
      await api.post('/user/create', {
        name: data.email,
        email: data.email,
        password: data.telefone.slice(-4),
        cargo: data.cargo,
      });
    } catch (error) {
      console.error(error);
    }
    reset();
  }

  return (
    <Dialog.Content maxWidth="450px">
      <form onSubmit={handleSubmit(handleRegisterSubmit)}>
        <Dialog.Title>Cadastrar usuários</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome
            </Text>
            <TextField.Root {...register('name')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root {...register('email')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              N° Telefone
            </Text>
            <TextField.Root {...register('telefone')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Cargo
            </Text>
            <TextField.Root {...register('cargo')} />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button style={{ cursor: 'pointer' }} variant="soft" color="gray">
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button type="submit" style={{ cursor: 'pointer' }}>
              Salvar
            </Button>
          </Dialog.Close>
        </Flex>
      </form>
    </Dialog.Content>
  );
}
