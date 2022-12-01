import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import keycloak from '../auth/keycloak';
import { config } from './config';

// Definimos la API con su configuración base, sin ningún endpoint.
// Los endpoints serán definidos luego en archivos separados.

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
    prepareHeaders: async (headers) => {
      if (!keycloak.token) {
        return;
      }

      // Este método actualiza el token si es necesario y redirige al login si expiró la sesión.
      try {
        await keycloak.updateToken(10);
      } catch (_error) {
        keycloak.login();
      }

      headers.set('authorization', `Bearer ${keycloak.token}`);
    },
  }),
  endpoints: () => ({}),
});
