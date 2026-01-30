import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export interface AppModuleBConstructProps {
  memorySize: number;
}

export class AppModuleB extends Construct {
  constructor(scope: Construct, id: string, props: AppModuleBConstructProps) {
    super(scope, id);

    new NodejsFunction(this, "AppFunctionB1", {
      entry: join(import.meta.dirname, "../lambda/app.ts"),
      bundling: {
        forceDockerBundling: false,
      },
      memorySize: props.memorySize,
    });
  }
}
