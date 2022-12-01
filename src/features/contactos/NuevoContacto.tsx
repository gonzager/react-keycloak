import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useCreateContactoMutation } from '../../app/services/contactosApi';
import SaveIcon from '@mui/icons-material/Save';

export default function NuevoContacto() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const [agregarContacto, { isLoading }] = useCreateContactoMutation();

  const guardar = () => {
    agregarContacto({ nombre, edad: parseInt(edad) });
    setNombre('');
    setEdad('');
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <TextField
        id="nombre"
        label="Nombre"
        required
        variant="standard"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        id="edad"
        label="Edad"
        type="number"
        required
        variant="standard"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <LoadingButton
        loading={isLoading}
        loadingPosition="start"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={guardar}
      >
        Guardar
      </LoadingButton>
    </Stack>
  );
}
