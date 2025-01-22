import {
  Badge,
  Button,
  Dialog,
  Flex,
  Popover,
  Tooltip,
} from '@radix-ui/themes';
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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Faders } from 'phosphor-react';

interface NotesProps {
  id: string;
  date: string;
  creatd_at: string;
  remetente: string;
  destinatario: string;
  n_ctrc: string;
  unidade: string;
  valor_ctrc: string;
  user: {
    name: string;
    email: string;
  };
}

export function NotesPage() {
  const [dateFist, setDateFist] = useState<Dayjs | null>(null);
  const [dateLast, setDateLast] = useState<Dayjs | null>(null);
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

  async function deleteNotes(id: string) {
    await api.delete(`/notesdelete/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('@ferlog/token'),
      },
    });

    getNotes();
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

  const fetchNotas = async (dateFist: Dayjs, dateLast: Dayjs) => {
    try {
      const response = await api.get('/notes', {
        params: { dateFist, dateLast },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('@ferlog/token'),
        },
      });
      setNotes(response.data.notes.notes);
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
    }
  };

  const handleFilter = () => {
    if (dateFist && dateLast) {
      console.log(dateFist.toISOString(), dateLast.toISOString());
      fetchNotas(dateFist, dateLast);
    }
  };

  return (
    <PageConteiner>
      <SectionContainer>
        <h2>Notas</h2>
        <Flex gap={'3'}>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button>cadastrar</Button>
            </Dialog.Trigger>
            <RegisterNoteModal getNotes={getNotes} />
          </Dialog.Root>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft">
                <Faders size={20} />
                Fitro{' '}
              </Button>
            </Popover.Trigger>
            <Popover.Content width="270px">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <Flex direction={'column'} gap={'3'}>
                    <DatePicker
                      label="Data Início"
                      value={dateFist}
                      onChange={(newValue) => setDateFist(newValue)}
                    />
                    <DatePicker
                      label="Data Fim"
                      value={dateLast}
                      onChange={(newValue) => setDateLast(newValue)}
                    />
                    <Button onClick={handleFilter}>Buscar</Button>
                  </Flex>
                </DemoContainer>
              </LocalizationProvider>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </SectionContainer>

      <BoxNotes>
        {notes &&
          notes.map((note) => (
            <CardsNotes>
              <h3>
                <Tooltip content={note.user.name}>
                  <span>{note.user.name.split(' ')[0]}</span>
                </Tooltip>
                - {dayjs(note.creatd_at).format('DD/MM/YYYY')}
              </h3>
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
                <Dialog.Root data-state={false}>
                  <Dialog.Trigger>
                    <Button
                      onClick={() => console.log('editar')}
                      style={{ cursor: 'pointer' }}
                    >
                      Editar
                    </Button>
                  </Dialog.Trigger>

                  <RegisterNoteModal getNotes={getNotes} note={note} />
                </Dialog.Root>
                <Button
                  onClick={() => deleteNotes(note.id)}
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
