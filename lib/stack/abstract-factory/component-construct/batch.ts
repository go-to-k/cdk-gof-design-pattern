import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export interface BatchModuleConstructProps {}

export class BatchModule extends Construct {
  constructor(scope: Construct, id: string, props?: BatchModuleConstructProps) {
    super(scope, id);

    new NodejsFunction(this, "BatchFunction", {
      entry: join(__dirname, "../lambda/batch.ts"),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
