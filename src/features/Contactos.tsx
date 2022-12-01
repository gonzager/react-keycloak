import { Typography, Stack } from '@mui/material';
import ListaContactos from './contactos/ListaContactos';
import NuevoContacto from './contactos/NuevoContacto';

export default function Contactos() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" gutterBottom>
        Contactos
      </Typography>
      <NuevoContacto />
      <ListaContactos />
    </Stack>
  );
}
