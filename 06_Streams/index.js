// reading the whole contents as well as writing the whole contents
import { readFile, writeFile } from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, 'utf-8');

console.log(contents);
// const data = {
//     name: 'Sarthak Jain',
//     company: 'Microsoft',
//     age: 25
// }

// for(const [key, value] of Object.entries(data)) {
//     contents = contents.replace(`{{${key}}}`, value);
// }

// await writeFile(new URL('./newindex.html', import.meta.url), contents);

// process.stdout.write("hi"); 
// process.stdout.write("Hello");