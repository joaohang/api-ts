import knex from "knex";

const database = knex({
  client: 'pg',
  connection: {
    application_name: process.env.APPLICATION_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export { database };
