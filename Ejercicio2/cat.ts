import { promises as fsPromises } from 'fs';
import * as path from 'path';

const filepath = path.resolve(__dirname, process.argv[2]);

(async () => {
    const data = await fsPromises.readFile(filepath, 'utf8');
    console.log(data);
})();