import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class MySingletonFunction extends NodejsFunction {
  private static singleton: MySingletonFunction;

  private constructor(scope: Construct, id: string, props: NodejsFunctionProps) {
    super(scope, id, props);
  }

  static getInstance(
    scope: Construct,
    id: string,
    props: NodejsFunctionProps,
  ): MySingletonFunction {
    if (this.singleton === undefined) {
      this.singleton = new MySingletonFunction(scope, id, props);
    }
    return this.singleton;
  }
}
