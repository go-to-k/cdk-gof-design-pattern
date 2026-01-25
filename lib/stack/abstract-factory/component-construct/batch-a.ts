import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export interface BatchModuleAConstructProps {}

export class BatchModuleA extends Construct {
  constructor(scope: Construct, id: string, _props?: BatchModuleAConstructProps) {
    super(scope, id);

    new NodejsFunction(this, "BatchFunctionA", {
      entry: join(__dirname, "../lambda/batch.ts"),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
