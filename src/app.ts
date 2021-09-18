import * as dotenv from 'dotenv';
import * as express from 'express';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3009);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(app.get('port'));
