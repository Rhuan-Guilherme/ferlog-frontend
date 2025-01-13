import { Button, Dialog, DropdownMenu, Table } from '@radix-ui/themes';
import { PageConteiner, SectionContainer } from './styled';
import { RegisterNoteModal } from './registerNoteModal/registerNoteModal';
import { DropDonwButtons } from '../UsersPage/styles';
import { Trash } from 'phosphor-react';

export function NotesPage() {
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
          <Table.Row>
            <Table.RowHeaderCell>Data</Table.RowHeaderCell>
            <Table.Cell>nota</Table.Cell>
            <Table.Cell>nota</Table.Cell>
            <Table.Cell>nota</Table.Cell>
            <Table.Cell>nota</Table.Cell>
            <Table.Cell>nota</Table.Cell>
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
        </Table.Body>
      </Table.Root>
    </PageConteiner>
  );
}
