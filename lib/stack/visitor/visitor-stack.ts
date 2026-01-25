import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VisitorConfigStackProps } from './config';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export class VisitorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: VisitorConfigStackProps) {
    super(scope, id, props);

    new Bucket(this, 'Bucket', {
      versioned: true,
    });
  }
}
