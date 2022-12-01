import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Grid, Skeleton } from '@mui/material';
import {
  Contacto,
  useGetContactoByIdQuery,
} from '../../app/services/contactosApi';

interface DetalleContactoParams {
  contacto: Contacto;
  isLoading: boolean;
}

function DetalleContacto({ contacto, isLoading }: DetalleContactoParams) {
  return (
    <>
      <Typography variant="h5">
        {isLoading ? <Skeleton width={80} /> : contacto.nombre}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {isLoading ? <Skeleton width={120} /> : `${contacto.edad} años`}
      </Typography>
    </>
  );
}

export default function FichaContacto() {
  const { id } = useParams();
  const { data, isLoading } = useGetContactoByIdQuery(id as string);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <DetalleContacto
              contacto={data as Contacto}
              isLoading={isLoading}
            />
          </CardContent>
          <CardActions>
            <Grid container justifyContent="flex-end">
              <Button size="small" component={Link} to="/contactos">
                Volver
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
