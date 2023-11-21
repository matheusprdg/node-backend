import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { ISampleService } from '../interfaces/ISampleService';

@injectable()
export class SampleController {
  constructor(@inject('ISampleService') private sampleService: ISampleService) { }

  public getSample(req: Request, res: Response): void {
    const message = this.sampleService.getMessage();
    res.send(`Mensagem: ${message}`);
  }
}