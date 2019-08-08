import { CallLog } from '../models/call-log';

export async function test() {
  const row = await CallLog.findOne({});
  console.log(row.get());
  return '1';
}
