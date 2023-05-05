import { Construct } from "constructs";
import { Resource } from "aws-cdk-lib";
import { RetainResourceCreator } from "./retain-resource-creator";
import { Queue } from "aws-cdk-lib/aws-sqs";

export class RetainQueueCreator extends RetainResourceCreator {
  protected createResource(scope: Construct, id: string): Resource {
    return new Queue(scope, id);
  }
}
