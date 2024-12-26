import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

async function readingHtml() {
    // resolve function is already async function so don't need to make it await
    const path = resolve('C:/Users/Rahul Singh/Desktop/Web Development/NodeJS/03_fileSystem/index.html');
    let file = await readFile(path);
    const data = {
        name: 'Sanket',
        company: 'MSFT'
    }

    for(const [key, value] of Object.entries(data)) {
        file = file.toString().replace(`{{${key}}}`, value);
    }

    await writeFile(resolve('C:/Users/Rahul Singh/Desktop/Web Development/NodeJS/03_fileSystem/output.html'), file)
    console.log(file.toString());
}

readingHtml();

