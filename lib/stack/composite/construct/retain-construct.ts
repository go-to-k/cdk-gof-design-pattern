import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";
import { RetainDescendant } from "./retain-descendant";

export interface RetainConstructProps {}

export class RetainConstruct extends Construct {
  constructor(scope: Construct, id: string, _props?: RetainConstructProps) {
    super(scope, id);
    new Queue(this, "ChildQueue1");
    new Queue(this, "ChildQueue2");
    new RetainDescendant(this, "RetainDescendant");
  }
}
