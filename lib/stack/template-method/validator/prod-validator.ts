import type { TemplateMethodConfig } from "../config.ts";
import { Validator } from "./validator.ts";

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
