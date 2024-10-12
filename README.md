# Nodejs Sequelize REST API

- nodejs
- express
- sequelize
- sqlite

## Requisitos

- Node.js
- sqlite

## Instalacion

1. Clonar Repositorio : `git clone https://github.com/EP-2024C2/tp-ntom-fsociety404.git`

2. Instalar dependencias : `npm install`

3. Crear una base de datos en sqlite

4. Create a .env file in the root directory and add the following:

```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=your_host
DB_PORT=your_port
DB_DATABASE=your_database
```

or just copy the .env.template file and fill it with your data.

5. Ejecutar servidor: `npm run dev`

## Endpoints

| Verbo  | Recurso                    | Status code   | Descripción                                           |
| ------ | -------------------------- | ------------- | ----------------------------------------------------- |
| GET    | /productos                 | 200           | Obtener todos los productos                           |
| GET    | /productos/:id             | 200, 404      | Obtener un producto en particular                     |
| POST   | /productos                 | 201, 400      | Crear un producto                                     |
| PUT    | /productos/:id             | 200, 404      | Modificar los datos de un producto en particular      |
| DELETE | /productos/:id             | 200, 404, 500 | Borrar un producto en particular                      |
| POST   | /productos/:id/fabricantes | 201, 404, 400 | Crear la asociación de producto con 1 o N fabricantes |
| GET    | /productos/:id/fabricantes | 200, 404      | Obtener todos los fabricantes de un producto          |
| POST   | /productos/:id/componentes | 201, 404, 400 | Crear la asociación de producto con 1 o N componentes |
| GET    | /productos/:id/componentes | 200, 404      | Obtener todos los componentes de un producto          |
| GET    | /fabricantes               | 200           | Obtener todos los fabricantes                         |
| GET    | /fabricantes/:id           | 200, 404      | Obtener un fabricante en particular                   |
| POST   | /fabricantes               | 201, 400      | Crear un fabricante                                   |
| PUT    | /fabricantes/:id           | 200, 404      | Modificar los datos de un fabricante en particular    |
| DELETE | /fabricantes/:id           | 200, 404, 500 | Borrar un fabricante en particular                    |
| GET    | /fabricantes/:id/productos | 200, 404      | Obtener todos los productos de un fabricante          |
| GET    | /componentes               | 200           | Obtener todos los componentes                         |
| GET    | /componentes/:id           | 200, 404      | Obtener un componente en particular                   |
| POST   | /componentes               | 201, 400      | Crear un componente                                   |
| PUT    | /componentes/:id           | 200, 404      | Modificar los datos de un componente en particular    |
| DELETE | /componentes/:id           | 200, 404, 500 | Borrar un componente en particular                    |
| GET    | /componentes/:id/productos | 200, 404      | Obtener todos los productos de un componente          |

## Modelo de API

- aca va la imagen

## Estructura del Proyecto

```bash
.
├── package.json
└── src
    ├── app.js
    ├── config
    │   ├── config.json
    │   └── index.js
    ├── controllers
    │   ├── componente_controllers.js
    │   ├── fabricante_controllers.js
    │   └── index.js
    ├── middlewares
    │   └── ?????????
    ├── models
    │   ├── componente_model.js
    │   ├── fabricante_model.js
    │   ├── producto_model.js
    │   └── index.js
    ├── routes
    │   ├── componente_routes.js
    │   ├── fabricante_routes.js
    │   └── index.js
    ├── schemas
    │   ├── componente_schemas.js
    │   ├── fabricante_schemas.js
    │   ├── producto_schemas.js
    │   └── schemas_comunes.js
    └── seeders
        └── ?????????
```
