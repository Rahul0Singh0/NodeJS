import express from 'express';
import { PORT } from './config/serverConfig.js';
import tweetRouter from './routes/V1/tweet.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

console.log(import.meta);
// view engine to ejs
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname + '/views');

app.use('/api', apiRouter); // localhost:3000/tweets

app.get('/', (req, res) => {
    res.render('home', {name: 'John Doe'});
});



app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'Not Found'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});