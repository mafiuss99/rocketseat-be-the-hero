const express = require('express');
/* Importando as funcionalidades do express */
const routes = require('./routes');
/* Importando as rotas*/
const cors = require('cors');

const app = express();
/* Instanciando a aplicação */

app.use(routes)
/* Utilizando as rotas */

app.use(cors());
/* Utilizando o cors */

app.listen(3333);
/* Aplicação ouvindo a porta 3333 */