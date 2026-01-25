import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';

export interface AppModuleAConstructProps {
  memorySize: number;
}

export class AppModuleA extends Construct {
  constructor(scope: Construct, id: string, props: AppModuleAConstructProps) {
    super(scope, id);

    new NodejsFunction(this, 'AppFunctionA1', {
      entry: join(__dirname, '../lambda/app.ts'),
      bundling: {
        forceDockerBundling: false,
      },
      memorySize: props.memorySize,
    });

    new NodejsFunction(this, 'AppFunctionA2', {
      entry: join(__dirname, '../lambda/app.ts'),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
