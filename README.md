# Repositorio semilla: aplicación React + RTK + MUI + KeyCloak

>  Este proyecto fue creado con [Create React App](https://create-react-app.dev/), y por lo tanto toda la documentación del sitio oficial también puede consultarse para saber más.

¡Bienvenida/o! En este repositorio encontrarás una plantilla (de las infinitas posibles) para crear una aplicación web con React. Las principales tecnologías que utilizamos son:

- [React](https://reactjs.org/): framework para construir interfaces de usuario.
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/): biblioteca para manejar estado en React.
- [Material UI](https://material-ui.com/): sistema de componentes visuales para React.
- [React Router](https://reactrouter.com/): biblioteca para manejar rutas en React.
- [Jest](https://jestjs.io/): framework para escribir tests.

Para crear un proyecto siguiendo esta plantilla, lo único que tenés que hacer es clickear en el botón que dice `Use this template`. ¡Y no te olvides de cambiarle el nombre en el `package.json`!

## Prerrequisitos - para instalar antes de empezar

> ⚠️ El ejemplo viene preparado para ser ejecutado junto a una API que podes encontrar en este [repositorio](https://gitlab.extranet.fluxit.com.ar/technology/arquitectura-de-referencia/authorization/nest-with-keycloak)

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) - que se lleva muy bien con proyectos JavaScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

Para ejecutar el código es necesario tener NodeJS en su versión 18 (`lts/hydrogen`). Para instalarlo recomendamos utilizar el manejador de versiones [`nvm`](https://github.com/nvm-sh/nvm), aunque también podés hacerlo manualmente siguiendo las instrucciones adecuadas para tu sistema operativo.

## Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos, estos son los comandos que deberías ejecutar la primera vez que trabajes en el proyecto:

```shell
# Instala las dependencias Node del proyecto.
npm install
```

Por defecto, el proyecto espera que la API esté levantada en `localhost:4000`. Si se quiere modificar el puerto o la URL, es posible hacerlo creando un archivo `.env` y editando la variable correspondiente:

```shell
# Copia el archivo .env de ejemplo
cp .env.example .env
```

## Estructura de directorios

Breve descripción de qué se puede encontrar en cada uno de los directorios del proyecto:

```shell
├── public                  # Index, favicon y otros archivos comunes
└── src
    ├── app                 # Archivos raíz de RTK
    │   └── services        # APIs de RTK Query
    └── features            # Componentes de React
```

## Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

### Código

```shell
# Levanta el proyecto y recarga automáticamente si hay cambios.
npm start

# Ejecuta los tests y se queda esperando por cambios.
npm test
```

## 🔑 Keycloak local

En el `docker-compose` viene incluida la api que se encuentra en este [repositorio](https://gitlab.extranet.fluxit.com.ar/technology/arquitectura-de-referencia/authorization/nest-with-keycloak) que además de levantar la api y la base también incluye  un servidor de Keycloak local con todo lo necesario para ejecutar tanto este proyecto como el frontend y backend.



Vienen además dos usuarios, uno para la consola de administrador (accesible desde http://localhost:8080) y otro para usar en la aplicación:

👨 **Usuario para la aplicación:** usuario@flux.com.ar // 1qaz!QAZ

👮 **Usuario para la consola de admin:** admin // admin1234

🚀 el real configurado dentro de keycloak se llama **fluxit** y el cliente se llama **front-flux-code-pkce**

