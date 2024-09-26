import { join, resolve } from 'path';

const rootPath = resolve(__dirname, '../../../'); // Adjust this based on your folder structure

export const getRootPath = (...args) => {
  return join(rootPath, ...args);
};