import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloakInst from './app/auth/keycloak';

const container = document.getElementById('root')!;
const root = createRoot(container);

//const initOptions = { onLoad: 'login-required' };
const initOptions = { onLoad: 'check-sso' };

root.render(
  <ReactKeycloakProvider authClient={keycloakInst} initOptions={initOptions}>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
      ,
    </React.StrictMode>
    ,
  </ReactKeycloakProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
