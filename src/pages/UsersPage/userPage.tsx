import { Button, Dialog, DropdownMenu, Table } from '@radix-ui/themes';
import { Pencil, Trash } from 'phosphor-react';
import { DropDonwButtons, PageConteiner, SectionContainer } from './styles';
import { RegisterModal } from './components/RegisterModal/registerModal';

export function UsersPage() {
  return (
    <PageConteiner>
      <SectionContainer>
        <h2>Listagem de usuários</h2>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>cadastrar</Button>
          </Dialog.Trigger>
          <RegisterModal />
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
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@gmail.com</Table.Cell>
            <Table.Cell>(61) 99999-9999</Table.Cell>
            <Table.Cell>Motorista</Table.Cell>
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
                    <DropDonwButtons variant="delete">
                      <Trash size={15} />
                      Excluir
                    </DropDonwButtons>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </PageConteiner>
  );
}
