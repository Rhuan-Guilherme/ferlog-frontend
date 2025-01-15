import { Button, Dialog, DropdownMenu, Table } from '@radix-ui/themes';
import { PageConteiner, SectionContainer } from './styled';
import { RegisterNoteModal } from './registerNoteModal/registerNoteModal';
import { DropDonwButtons } from '../UsersPage/styles';
import { Trash } from 'phosphor-react';
import { api } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/UserContext';

interface NotesProps {
  id: string;
  date: string;
  remetente: string;
  destinatario: string;
  n_ctrc: string;
  unidade: string;
  valor_ctrc: string;
}

export function NotesPage() {
  const { loged } = useContext(userContext);
  const [notes, setNotes] = useState<NotesProps[]>([]);
  const navigate = useNavigate();

  async function getNotes() {
    const response = await api.get('/notes', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('@ferlog/token'),
      },
    });

    setNotes(response.data.notes.notes);
  }

  useEffect(() => {
    getNotes();
  }, []);

  if (!loged) {
    navigate('/user');
    return null;
  }

  return (
    <PageConteiner>
      <SectionContainer>
        <h2>Notas</h2>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>cadastrar</Button>
          </Dialog.Trigger>

          <RegisterNoteModal />
        </Dialog.Root>
      </SectionContainer>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Data</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Remetente</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Destinatario</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>N° CTRC</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Unidade</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Valor do CTRC</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Ação</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {notes &&
            notes.map((note) => (
              <Table.Row>
                <Table.RowHeaderCell>{note.date}</Table.RowHeaderCell>
                <Table.Cell>{note.remetente}</Table.Cell>
                <Table.Cell>{note.destinatario}</Table.Cell>
                <Table.Cell>{note.n_ctrc}</Table.Cell>
                <Table.Cell>{note.unidade}</Table.Cell>
                <Table.Cell>{note.valor_ctrc}</Table.Cell>
                <Table.Cell>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="surface">
                        Opções
                        <DropdownMenu.TriggerIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item asChild>
                        <DropDonwButtons variant="delete">
                          <Trash size={15} />
                          Excluir
                        </DropDonwButtons>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </PageConteiner>
  );
}
