import express from 'express';
import path from 'path';
const app = express();

console.log(import.meta);
// view engine to ejs
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname + '/views');

app.get('/', (req, res) => {
    res.render('home', {name: 'John Doe'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});