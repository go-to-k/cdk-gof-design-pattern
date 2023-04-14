import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export interface RetainDescendantProps {}

export class RetainDescendant extends Construct {
  constructor(scope: Construct, id: string, props?: RetainDescendantProps) {
    super(scope, id);
    new Queue(this, "DescendantQueue");
  }
}
