import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import type { FactoryMethodConfigStackProps } from "./config.ts";
import { RetainQueueCreator } from "./retain-queue-creator.ts";
import { RetainBucketCreator } from "./retain-bucket-creator.ts";

export class FactoryMethodStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FactoryMethodConfigStackProps) {
    super(scope, id, props);

    const retainQueueCreator = new RetainQueueCreator();
    const retainBucketCreator = new RetainBucketCreator();

    retainQueueCreator.create(this, "RetainQueueA");
    retainQueueCreator.create(this, "RetainQueueB");
    retainBucketCreator.create(this, "RetainBucketA");
  }
}
