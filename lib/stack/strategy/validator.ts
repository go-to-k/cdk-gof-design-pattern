import { IValidation } from 'constructs';

export class Validator implements IValidation {
  private scopeType: string;
  private region: string;

  constructor(scopeType: string, region: string) {
    this.scopeType = scopeType;
    this.region = region;
  }

  public validate(): string[] {
    const errors: string[] = [];

    if (this.scopeType === 'CLOUDFRONT' && this.region !== 'us-east-1') {
      errors.push('Region must be us-east-1');
    }
    return errors;
  }
}
