import { TemplateMethodConfig } from '../config';
import { Validator } from './validator';

export class DevValidator extends Validator {
  constructor(config: TemplateMethodConfig) {
    super(config);
  }

  protected checkCpuThreshold(cpu: number): boolean {
    return cpu <= 2048;
  }
  protected checkMemoryLimitMiBThreshold(memoryLimitMiB: number): boolean {
    return memoryLimitMiB <= 4096;
  }
  protected checkDesiredCountThreshold(desiredCount: number): boolean {
    return desiredCount === 2;
  }
}
