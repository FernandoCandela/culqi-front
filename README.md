# Culqi Front

Front end para consumir la API de tokenización de tarjetas.

## Requisitos

- Node.js
- npm

## Configuración del entorno local

1. Clona el repositorio en tu máquina local usando `git clone https://github.com/FernandoCandela/culqi-front.git`.
2. Navega al directorio del proyecto con `cd nombre-del-repositorio`.
3. Instala las dependencias del proyecto con `npm install`.

## Variables de entorno

En el archivo `App.vue` modifica la variable window.apiUrl dependiendo de la url de tu API.

```ts
window.apiUrl = 'http://localhost:3000';
```
## Ejecución del proyecto

Para iniciar el servidor de desarrollo, ejecuta `npm run dev`. Esto iniciará el servidor en `http://localhost:8080`.

Abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en ejecución.

## Construcción del proyecto

Para construir el proyecto para producción, ejecuta `npm run build`. Esto creará una versión optimizada de la aplicación en el directorio `dist`.

## Pruebas

Para ejecutar las pruebas, utiliza `npm run test`.
