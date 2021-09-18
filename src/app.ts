import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors'
import * as fs from 'fs';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3009);
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(app.get('port'), async () => {
  try {
    await initialize();
  } catch(err) {
    console.error("Error occurred on initialization");
    console.error(err);
  }
});

async function initialize() {
  console.log("Starting initialization");

  try {
    fs.readdirSync('public');
  } catch {
    fs.mkdirSync('public');
  }

  console.log("Finished initialization");
}
