import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import type { AddToResourcePolicyResult } from "aws-cdk-lib/aws-iam";

export interface MultipleResourcePolicyTarget {
  addManyToResourcePolicy(statements: PolicyStatement[]): AddToResourcePolicyResult[];
}
