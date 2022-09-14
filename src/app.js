import express from 'express';
import cors from 'cors';
import { headers, methods } from './middlewares/global';
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
    this.app.use(routes);
  }
}

export default new App().app;
