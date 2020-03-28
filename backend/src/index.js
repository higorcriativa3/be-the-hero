const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/* Métodos HTTP:
  GET: Buscar/listar uma informação do back-end
  POST: Criar uma informação no back-end
  PUT: Alterar uma informação no back-end
  DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação) -> request.query
  * Route Params: Parâmetros utilizados para identificar recursos -> request.params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
app.listen(3333);