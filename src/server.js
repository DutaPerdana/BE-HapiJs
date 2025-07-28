/* eslint-disable linebreak-style */
// /* eslint-disable linebreak-style */
// const Hapi = require('@hapi/hapi');
// const routes = require('./routes');

// const init = async () => {
//   const server = Hapi.server({
//     port: 9000,
//     host: 'localhost',
//     //menambahkan cors di seluruh rotes
//     routes: {
//       cors: {
//         origin: ['*'],
//       },
//     },
//   });

//   // server.route(routes);
//   await server.start(routes);
//   console.log(`Server berjalan pada ${server.info.uri}`);
// };

// init();

const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: process.env.NODE_ENV == "production" ? "0.0.0.0" : "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
