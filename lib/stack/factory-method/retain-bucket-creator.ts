import { Construct } from 'constructs';
import { Resource } from 'aws-cdk-lib';
import { RetainResourceCreator } from './retain-resource-creator';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export class RetainBucketCreator extends RetainResourceCreator {
  protected createResource(scope: Construct, id: string): Resource {
    return new Bucket(scope, id);
  }
}
