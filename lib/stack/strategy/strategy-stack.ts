import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StrategyConfigStackProps } from './config';
import { Validator } from './validator';

export class StrategyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StrategyConfigStackProps) {
    super(scope, id, props);
    this.init(props);
  }

  private init(props: StrategyConfigStackProps) {
    const validator = new Validator(props.config.scopeType, this.region);
    this.node.addValidation(validator);
  }
}
