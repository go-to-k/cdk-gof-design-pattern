import { IValidation } from "constructs";
import { TemplateMethodConfig } from "../config";

export abstract class Validator implements IValidation {
  protected config: TemplateMethodConfig;

  constructor(config: TemplateMethodConfig) {
    this.config = config;
  }

  public validate(): string[] {
    const errors: string[] = [];

    if (!this.checkCpuThreshold(this.config.cpu)) {
      errors.push("CPU is invalid.");
    }
    if (!this.checkMemoryLimitMiBThreshold(this.config.memoryLimitMiB)) {
      errors.push("Memory is invalid.");
    }
    if (!this.checkDesiredCountThreshold(this.config.desiredCount)) {
      errors.push("DesiredCount is invalid.");
    }

    return errors;
  }

  protected abstract checkCpuThreshold(cpu: number): boolean;
  protected abstract checkMemoryLimitMiBThreshold(memoryLimitMiB: number): boolean;
  protected abstract checkDesiredCountThreshold(desiredCount: number): boolean;
}
