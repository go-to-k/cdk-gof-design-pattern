import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DecoratorConfigStackProps } from './config';
import { RemovalPolicyDestroyDecorator } from './removal-policy-destroy-decorator';
import { Queue } from 'aws-cdk-lib/aws-sqs';

export class DecoratorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DecoratorConfigStackProps) {
    super(scope, id, props);
    
    new RemovalPolicyDestroyDecorator(this, "sqs-queue-destroy-1", new Queue(this, 'sqs-queue-1'));
    new RemovalPolicyDestroyDecorator(this, "sqs-queue-destroy-2", new Queue(this, 'sqs-queue-2'));
    new RemovalPolicyDestroyDecorator(this, "sqs-queue-destroy-3", new Queue(this, 'sqs-queue-3'));
  }
}
