import * as express from 'express';
import * as mongoose from 'mongoose';
import {TaskManager} from './controllers/users';
import * as dotenv from 'dotenv';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config.js';
import bodyParser from 'body-parser';

dotenv.config();

const compiler = webpack(config);
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/realEstate';
mongoose.connect(databaseUrl, {useNewUrlParser: true});
const app = express();
const port = process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => new TaskManager(req, res).find());
app.get('/api/task/:id', (req, res) => new TaskManager(req, res).findTaskById());
app.delete('/api/task/:id', (req, res) => new TaskManager(req, res).deleteTask(req.params.id));
app.post('/api/task', (req, res) => new TaskManager(req, res).insertTask());
app.put('/api/task/:id', (req, res) => new TaskManager(req, res).updateTask());
app.post('/api/register/user', (req,res) => new TaskManager(req, res).insertUser());

app.listen(port, () => console.log(`Server listening on http://127.0.0.1:${port}`));
