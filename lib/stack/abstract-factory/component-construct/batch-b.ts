import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export interface BatchModuleBConstructProps {}

export class BatchModuleB extends Construct {
  constructor(scope: Construct, id: string, props?: BatchModuleBConstructProps) {
    super(scope, id);

    new NodejsFunction(this, "BatchFunctionB", {
      entry: join(__dirname, "../lambda/batch.ts"),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
