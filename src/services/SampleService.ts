import { injectable } from 'inversify';
import { ISampleService } from '../interfaces/ISampleService';

@injectable()
export class SampleService implements ISampleService {
  public getMessage(): string {
    return 'Esta é uma mensagem do SampleService';
  }
}