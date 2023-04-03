import { IValidation } from "constructs";

export class MyValidator implements IValidation {
  private scopeType: string;
  private region: string;

  constructor(scopeType: string, region: string) {
      this.scopeType = scopeType;
      this.region = region;
  }

  public validate(): string[] {
    const errors: string[] = [];

    // errors.push("Test Error 1.")
    // errors.push("Test Error 2.")

    return errors;
  }
}