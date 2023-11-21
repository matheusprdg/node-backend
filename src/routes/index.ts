import express, { Router, Request, Response } from 'express';
import { SampleController } from '../controllers/SampleController';
import { Container } from 'inversify';
import { ISampleService } from '../interfaces/ISampleService';
import { SampleService } from '../services/SampleService';

const container = new Container();

// Configuração do container
container.bind<ISampleService>('ISampleService').to(SampleService);
container.bind<SampleController>(SampleController).toSelf();

const router = Router();

class IndexRouter {
  public static configureRoutes(): Router {
    const sampleController = container.resolve<SampleController>(SampleController);

    router.get('/', (req: Request, res: Response) => {
      res.send('Bem-vindo ao meu servidor TypeScript!');
    });

    router.get('/sample', sampleController.getSample.bind(sampleController));

    router.get('*', (req: Request, res: Response) => {
      res.status(404).send('Página não encontrada');
    });

    return router;
  }
}

export default IndexRouter.configureRoutes();