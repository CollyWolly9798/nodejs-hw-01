import { fileURLToPath } from 'node:url';
import path from 'node:path';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export const PATH_DB = path.join(dirname, '../db/db.json');
