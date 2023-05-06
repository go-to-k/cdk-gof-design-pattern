import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export interface AppModuleConstructProps {
  memorySize: number;
}

export class AppModule extends Construct {
  constructor(scope: Construct, id: string, props: AppModuleConstructProps) {
    super(scope, id);

    new NodejsFunction(this, "AppFunction1", {
      entry: join(__dirname, "../lambda/app.ts"),
      bundling: {
        forceDockerBundling: false,
      },
      memorySize: props.memorySize,
    });

    new NodejsFunction(this, "AppFunction2", {
      entry: join(__dirname, "../lambda/app.ts"),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
