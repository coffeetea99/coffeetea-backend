import * as express from 'express';

const app = express();
app.set('port', 3009);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(app.get('port'));
