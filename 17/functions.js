import { getUserCount } from './db.js';

export const printUserCount = () => {
  return getUserCount().then((p) => console.log(p))
}