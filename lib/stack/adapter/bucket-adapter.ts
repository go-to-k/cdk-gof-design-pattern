import { Construct } from 'constructs';
import { MultipleResourcePolicyTarget } from './multiple-resource-policy-target';
import { AddToResourcePolicyResult, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Bucket, BucketProps } from 'aws-cdk-lib/aws-s3';

export interface BucketAdapterProps extends BucketProps {}

export class BucketAdapter extends Bucket implements MultipleResourcePolicyTarget {
  constructor(scope: Construct, id: string, props?: BucketAdapterProps) {
    super(scope, id, props);
  }

  addManyToResourcePolicy(statements: PolicyStatement[]): AddToResourcePolicyResult[] {
    return statements.map((statement) => {
      return this.addToResourcePolicy(statement);
    });
  }
}
