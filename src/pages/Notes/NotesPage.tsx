import { Button, Dialog } from '@radix-ui/themes';
import { PageConteiner, SectionContainer } from './styled';
import { RegisterNoteModal } from './registerNoteModal/registerNoteModal';

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
    </PageConteiner>
  );
}
