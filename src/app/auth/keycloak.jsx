import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'fluxit',
  clientId: 'front-flux-code-pkce'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;