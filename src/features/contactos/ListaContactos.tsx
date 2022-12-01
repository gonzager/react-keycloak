import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Alert,
  AlertTitle,
  Skeleton,
  Stack,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import {
  Contacto,
  useGetContactosQuery,
} from '../../app/services/contactosApi';

function FalsoContacto() {
  return (
    <Stack direction="row" spacing={1}>
      <Skeleton variant="circular" width={40} height={40}></Skeleton>
      <Skeleton variant="rectangular" height={40} width={200}></Skeleton>
    </Stack>
  );
}

interface ContactoItemParams {
  contacto: Contacto;
}

function ContactoItem({ contacto }: ContactoItemParams) {
  return (
    <ListItem
      key={contacto.id}
      secondaryAction={
        <Button component={Link} to={`/contactos/${contacto.id}`}>
          Ver detalles
        </Button>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={contacto.nombre}
        secondary={`${contacto.edad} años`}
      />
    </ListItem>
  );
}

export default function ListaContactos() {
  const { data, error, isLoading, isFetching } = useGetContactosQuery();

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>
          Ocurrió un error al intentar acceder a la API. ¿Está levantada? 🤔
        </AlertTitle>
        El error que arrojó la request es{' '}
        <i>{JSON.stringify(error, undefined, 2)}</i>
      </Alert>
    );
  }

  return (
    <List>
      {isLoading
        ? Array.from({ length: 5 }, (_, index) => (
            <ListItem key={`fake-${index}`}>
              <FalsoContacto />
            </ListItem>
          ))
        : data?.map((it) => <ContactoItem key={it.id} contacto={it} />)}
      {isFetching && (
        <ListItem>
          <FalsoContacto />
        </ListItem>
      )}
    </List>
  );
}
