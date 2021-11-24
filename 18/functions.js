import { getUserCount } from './db.js';
import { handleUnknownError } from './errorHandlers.js';

export const printUserCount = () => {
  try {
    return getUserCount().then(console.log).catch(handleUnknownError);
  } catch (e) {
    handleUnknownError(e);
  }
}