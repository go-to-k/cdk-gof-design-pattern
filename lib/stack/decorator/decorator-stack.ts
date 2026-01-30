import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import type { DecoratorConfigStackProps } from "./config.ts";
import { DestroyRemovalPolicyDecorator } from "./destroy-removal-policy-decorator.ts";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { RetainRemovalPolicyDecorator } from "./retain-removal-policy-decorator.ts";

export class DecoratorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DecoratorConfigStackProps) {
    super(scope, id, props);

    new DestroyRemovalPolicyDecorator(this, "SQSQueueDestroy1", new Queue(this, "SQSQueue1"));
    new DestroyRemovalPolicyDecorator(this, "SQSQueueDestroy2", new Queue(this, "SQSQueue2"));
    new RetainRemovalPolicyDecorator(this, "SQSQueueRetain3", new Queue(this, "SQSQueue3"));
  }
}
