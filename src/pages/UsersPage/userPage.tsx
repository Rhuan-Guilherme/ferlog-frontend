import { Button, Dialog, DropdownMenu, Table } from '@radix-ui/themes';
import { Pencil, Trash } from 'phosphor-react';
import { DropDonwButtons, PageConteiner, SectionContainer } from './styles';
import { RegisterModal } from './components/RegisterModal/registerModal';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

interface UserProps {
  id: string;
  name: string;
  email: string;
  cargo: string;
  phone: string;
  role: string;
}

export function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  async function getUsers() {
    const response = await api.get('/user/all', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('@ferlog/token'),
      },
    });

    setUsers(response.data.user);
  }

  async function deleteUser(id: string) {
    await api.delete(`/user/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('@ferlog/token'),
      },
    });

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <PageConteiner>
      <SectionContainer>
        <h2>Listagem de usuários</h2>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>cadastrar</Button>
          </Dialog.Trigger>
          <RegisterModal getUsers={getUsers} />
        </Dialog.Root>
      </SectionContainer>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nome Completo</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>N° Telefone</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Cargo</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Ação</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users &&
            users.map((user) => (
              <Table.Row key={user.id}>
                <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phone}</Table.Cell>
                <Table.Cell>{user.cargo}</Table.Cell>
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
                        <DropDonwButtons variant="normal">
                          <Pencil size={15} />
                          Editar
                        </DropDonwButtons>
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item asChild>
                        <DropDonwButtons
                          variant="delete"
                          onClick={() => deleteUser(user.id)}
                        >
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
