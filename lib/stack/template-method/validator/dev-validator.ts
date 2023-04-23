import { TemplateMethodConfig } from "../config";
import { Validator } from "./validator";

export class DevValidator extends Validator {
  constructor(config: TemplateMethodConfig) {
    super(config);
  }

  protected checkCpuThreshold(): boolean {
    return this.config.cpu <= 2048;
  }
  protected checkMemoryLimitMiBThreshold(): boolean {
    return this.config.memoryLimitMiB <= 4096;
  }
  protected checkDesiredCountThreshold(): boolean {
    return this.config.desiredCount === 2;
  }
}
