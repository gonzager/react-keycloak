import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';

import { useKeycloak } from '@react-keycloak/web';

function Copyleft() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyleft '}
      <Link color="inherit" href="https://www.fluxitsoft.com/">
        Flux It
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function ButtonAppBar() {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    keycloak.logout();
  };

  const handleLogin = () => {
    keycloak.login();
  };

  const handleRedirect = () => {
    navigate('/contactos');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              color="inherit"
              onClick={handleHome}
              sx={{ marginLeft: '10px' }}
            >
              Home
            </Button>
            {!!keycloak.authenticated && (
              <Button
                color="inherit"
                onClick={handleRedirect}
                sx={{ marginLeft: '10px' }}
              >
                Contactos
              </Button>
            )}
          </Typography>
          {/* Muestra el nombre de usuario */}
          {!!keycloak.authenticated && (
            <Typography variant="body1" sx={{ marginRight: '10px' }}>
              Hola, {keycloak.idTokenParsed?.preferred_username}
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </Typography>
          )}

          {!keycloak.authenticated && (
            <Typography variant="body1" sx={{ marginRight: '10px' }}>
              <Button color="inherit" onClick={handleLogin}>
                Login
              </Button>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="lg">
        <Box my={4}>
          <Outlet />
        </Box>
        <Copyleft />
      </Container>
    </>
  );
}

export default App;
