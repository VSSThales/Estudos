const express = require('express');

const app = express();

/**
 * Metodos HTTP:
 * 
 * GET: Buscar informações do back-end;
 * POST: Criar uma informação no back-end;
 * PUT: Alterar(atualizar) uma informação global no back-end;
 * PATCH: Alterar(atualizar) uma informação especifica no back-end;
 * DELETE: Deletar uma informação no back-end;
 */

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => { //sempre que utilizar o put tem que informar o :id
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => { //sempre que utilizar o delete tem que informar o :id
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});