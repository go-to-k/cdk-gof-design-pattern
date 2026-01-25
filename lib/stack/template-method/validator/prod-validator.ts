import { TemplateMethodConfig } from '../config';
import { Validator } from './validator';

export class ProdValidator extends Validator {
  constructor(config: TemplateMethodConfig) {
    super(config);
  }

  protected checkCpuThreshold(cpu: number): boolean {
    return cpu >= 4096;
  }
  protected checkMemoryLimitMiBThreshold(memoryLimitMiB: number): boolean {
    return memoryLimitMiB >= 8192;
  }
  protected checkDesiredCountThreshold(desiredCount: number): boolean {
    return desiredCount >= 6;
  }
}
