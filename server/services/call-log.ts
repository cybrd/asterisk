import { CallLog } from '../models/call-log';
import console = require('console');

export async function test() {
  const row = await CallLog.findOne({});
  console.log(row);
  return '1';
}
