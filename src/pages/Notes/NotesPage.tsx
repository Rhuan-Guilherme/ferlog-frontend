import { Badge, Button, Dialog } from '@radix-ui/themes';
import {
  BoxNotes,
  CardsNotes,
  PageConteiner,
  SectionContainer,
} from './styled';
import { RegisterNoteModal } from './registerNoteModal/registerNoteModal';

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

  function serviceValue(value: string) {
    const valueServiceToNumber = Number(value);
    const valueWithTax = valueServiceToNumber * 0.2;
    if (valueWithTax <= 80) {
      return 80;
    } else if (valueWithTax >= 320) {
      return 320;
    } else {
      return valueWithTax;
    }
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

      <BoxNotes>
        {notes &&
          notes.map((note) => (
            <CardsNotes>
              <h3>{note.date}</h3>
              <p>
                <span>Remetente:</span> {note.remetente}
              </p>
              <p>
                <span>Destinatario:</span> {note.destinatario}
              </p>
              <p>
                <span>Unidade:</span> {note.unidade}
              </p>
              <p>
                <span>N° CTRC:</span> {note.n_ctrc}
              </p>
              <p>
                <span>Valor CTRC:</span> R$ {note.valor_ctrc}
              </p>
              <p>
                <span>Valor do serviço:</span>
                <Badge
                  color="green"
                  variant="surface"
                  style={{ marginLeft: '5px' }}
                >
                  {'R$ ' + serviceValue(note.valor_ctrc).toFixed(2)}
                </Badge>
              </p>

              <div>
                <Button
                  onClick={() => console.log('editar')}
                  style={{ cursor: 'pointer' }}
                >
                  Editar
                </Button>
                <Button
                  onClick={() => console.log('excluir')}
                  variant="surface"
                  color="red"
                  style={{ cursor: 'pointer' }}
                >
                  Excluir
                </Button>
              </div>
            </CardsNotes>
          ))}
      </BoxNotes>
    </PageConteiner>
  );
}
