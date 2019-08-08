import { Sequelize } from 'sequelize';

export const db = new Sequelize('asterisk', 'domino', '3cjR2QE5HbnXd7n4', {
  host: '192.168.35.20',
  dialect: 'mysql'
});
