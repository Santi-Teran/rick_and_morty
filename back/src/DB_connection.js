import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import character from './models/Character.js';

config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

character(sequelize);

export default { sequelize, ...sequelize.models };