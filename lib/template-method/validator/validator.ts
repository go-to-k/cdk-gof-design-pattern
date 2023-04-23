import { IValidation } from "constructs";
import { TemplateMethodConfig } from "../config";

export abstract class Validator implements IValidation {
  protected config: TemplateMethodConfig;

  constructor(config: TemplateMethodConfig) {
    this.config = config;
  }

  public validate(): string[] {
    const errors: string[] = [];

    if (!this.checkCpuThreshold()) {
      errors.push("CPU is invalid.");
    }
    if (!this.checkMemoryLimitMiBThreshold()) {
      errors.push("Memory is invalid.");
    }
    if (!this.checkDesiredCountThreshold()) {
      errors.push("DesiredCount is invalid.");
    }

    return errors;
  }

  protected abstract checkCpuThreshold(): boolean;
  protected abstract checkMemoryLimitMiBThreshold(): boolean;
  protected abstract checkDesiredCountThreshold(): boolean;
}
