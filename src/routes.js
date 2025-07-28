/* eslint-disable linebreak-style */
const { addNoteHandler, getAllNotesHandler, editNoteByIdHandler,  getNoteByIdHandler, deleteNoteById } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    // handler: () => {},
    handler: addNoteHandler,
    //tambahkan cors untuk mengizinkan semua origin
    // options: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },
  },
  {
    method: 'GET',
    path: '/notes',
    handler:getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById,
  },
];

module.exports = routes;