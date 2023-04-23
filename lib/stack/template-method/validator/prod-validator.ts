import { TemplateMethodConfig } from "../config";
import { Validator } from "./validator";

export class ProdValidator extends Validator {
  constructor(config: TemplateMethodConfig) {
    super(config);
  }

  protected checkCpuThreshold(): boolean {
    return this.config.cpu >= 4096;
  }
  protected checkMemoryLimitMiBThreshold(): boolean {
    return this.config.memoryLimitMiB >= 8192;
  }
  protected checkDesiredCountThreshold(): boolean {
    return this.config.desiredCount >= 6;
  }
}
