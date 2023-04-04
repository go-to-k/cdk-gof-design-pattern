import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DecoratorConfigStackProps } from './config';
import { DestroyRemovalPolicyDecorator } from './removal-policy-destroy-decorator';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { RetainRemovalPolicyDecorator } from './removal-policy-retain-decorator';

export class DecoratorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DecoratorConfigStackProps) {
    super(scope, id, props);
    
    new DestroyRemovalPolicyDecorator(this, "sqs-queue-destroy-1", new Queue(this, 'sqs-queue-1'));
    new DestroyRemovalPolicyDecorator(this, "sqs-queue-destroy-2", new Queue(this, 'sqs-queue-2'));
    new RetainRemovalPolicyDecorator(this, "sqs-queue-retain-3", new Queue(this, 'sqs-queue-3'));

    console.log(this.node.children)
  }
}
