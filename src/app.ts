import 'reflect-metadata';
import express, { Application } from 'express';
import { Container } from 'inversify';
import { SampleController } from './controllers/SampleController';
import { SampleService } from './services/SampleService';
import { ISampleService } from '../src/interfaces/ISampleService';
import router from './routes';

// const container = new Container();

// container.bind<ISampleService>('ISampleService').to(SampleService);
// container.bind<SampleController>(SampleController).toSelf();

export class App {
  private app: Application;
  private PORT: number;

  constructor() {
    this.app = express();
    this.PORT = 3000;
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/', router);
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${this.PORT}`);
    });
  }
}

const server = new App();
server.start();