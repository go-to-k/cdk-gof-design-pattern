import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FactoryMethodConfigStackProps } from './config';
import { RetainQueueCreator } from './retain-queue-creator';
import { RetainBucketCreator } from './retain-bucket-creator';

export class FactoryMethodStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FactoryMethodConfigStackProps) {
    super(scope, id, props);

    const retainQueueCreator = new RetainQueueCreator();
    const retainBucketCreator = new RetainBucketCreator();

    retainQueueCreator.create(this, 'RetainQueueA');
    retainQueueCreator.create(this, 'RetainQueueB');
    retainBucketCreator.create(this, 'RetainBucketA');
  }
}
