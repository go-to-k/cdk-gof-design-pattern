import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export interface SampleBConstructProps {}
export class SampleB extends Construct {
  constructor(scope: Construct, id: string, props?: SampleBConstructProps) {
    super(scope, id);
    new Queue(this, "SQSQueueB");
  }
}
