import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import {
  headers,
  methods,
} from './middlewares/global';
import routes from './routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(methods);
    this.app.use(headers);
    this.app.use(cors());
  }

  routes() {
    this.app.use('/.netlify/functions/api', routes);
  }
}

const app = new App();
const handler = serverless(app);

export {
  app,
  handler,
};
