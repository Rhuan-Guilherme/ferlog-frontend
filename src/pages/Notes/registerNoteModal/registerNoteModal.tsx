import { Dialog, Flex, TextField, Text, Button } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { api } from '../../../lib/axios';

interface FormNoteProps {
  id?: string;
  date: string;
  remetente: string;
  destinatario: string;
  unidade: string;
  n_ctrc: string;
  valor_ctrc: string;
}

interface GetNotesProps {
  getNotes: () => void;
  note?: FormNoteProps;
}

export function RegisterNoteModal({ getNotes, note }: GetNotesProps) {
  const currentDate = new Date();
  const dateFormat = format(currentDate, 'dd/MM/yyyy');

  const { register, handleSubmit, reset } = useForm<FormNoteProps>({
    defaultValues: {
      date: dateFormat,
      destinatario: note ? note.destinatario : '',
      remetente: note ? note.remetente : '',
      n_ctrc: note ? note.n_ctrc : '',
      valor_ctrc: note ? note.valor_ctrc : '',
      unidade: note ? note.unidade : '',
    },
  });

  async function postNote(data: FormNoteProps) {
    try {
      await api.post(
        '/note/create',
        {
          date: data.date,
          remetente: data.remetente,
          destinatario: data.destinatario,
          unidade: data.unidade,
          n_ctrc: data.n_ctrc,
          valor_ctrc: data.valor_ctrc,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@ferlog/token')}`,
          },
        }
      );
      reset();
      getNotes();
    } catch (error) {
      console.log(error);
    }
  }

  async function editNote(data: FormNoteProps) {
    try {
      await api.put(
        '/notes/edit',
        {
          id: note?.id,
          remetente: data.remetente,
          destinatario: data.destinatario,
          unidade: data.unidade,
          n_ctrc: data.n_ctrc,
          valor_ctrc: data.valor_ctrc,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@ferlog/token')}`,
          },
        }
      );
      reset();
      getNotes();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleForm(data: FormNoteProps) {
    if (!note) {
      await postNote(data);
    } else {
      await editNote(data);
    }
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
            <TextField.Root {...register('n_ctrc')} />
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
            <TextField.Root type="number" {...register('valor_ctrc')} />
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
