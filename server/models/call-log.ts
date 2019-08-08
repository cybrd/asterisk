import { Model, STRING, INTEGER } from 'sequelize';
import { db } from '../my.sequelize';

export class CallLog extends Model {
  public channel!: string;
  public extension!: string;
}

CallLog.init(
  {
    uniqueid: {
      type: INTEGER,
      primaryKey: true
    },
    channel: {
      type: STRING
    },
    extension: {
      type: STRING
    }
  },
  {
    sequelize: db,
    tableName: 'call_log',
    timestamps: false
  }
);
