// Reading chunk by chunk as well as writing chunk by chunk

const fs = require('fs');
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname + '/run.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt');

const transFormedStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000);
    }
});

const writeStream = process.stdout;

const outputStream = readstream.pipe(transFormedStream);

outputStream.pipe(writeStream);
outputStream.pipe(fileWriteStream);