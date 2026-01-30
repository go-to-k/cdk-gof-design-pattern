import { Construct } from "constructs";
import type { MultipleResourcePolicyTarget } from "./multiple-resource-policy-target.ts";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import type { AddToResourcePolicyResult } from "aws-cdk-lib/aws-iam";
import { Bucket } from "aws-cdk-lib/aws-s3";
import type { BucketProps } from "aws-cdk-lib/aws-s3";

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
