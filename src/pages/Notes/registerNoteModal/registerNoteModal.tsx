import { Dialog, Flex, TextField, Text, Button } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

interface FormNoteProps {
  date: string;
  remetente: string;
  destinatario: string;
  unidade: string;
  nctrc: string;
  valorctrc: string;
}

export function RegisterNoteModal() {
  const currentDate = new Date();
  const dateFormat = format(currentDate, 'dd/MM/yyyy');

  const { register, handleSubmit } = useForm<FormNoteProps>({
    defaultValues: {
      date: dateFormat,
    },
  });

  function handleForm(data: FormNoteProps) {
    console.log(data);
  }

  return (
    <Dialog.Content maxWidth="450px">
      <form onSubmit={handleSubmit(handleForm)}>
        <Dialog.Title>Cadastre sua nota</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Data
            </Text>
            <TextField.Root disabled {...register('date')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Remetente
            </Text>
            <TextField.Root {...register('remetente')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Destinatario
            </Text>
            <TextField.Root {...register('destinatario')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              N° CTRC
            </Text>
            <TextField.Root {...register('nctrc')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Unidade
            </Text>
            <TextField.Root {...register('unidade')} />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Valor do CTRC
            </Text>
            <TextField.Root {...register('valorctrc')} />
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
