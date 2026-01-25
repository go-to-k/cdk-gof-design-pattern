import { AddToResourcePolicyResult, PolicyStatement } from 'aws-cdk-lib/aws-iam';

export interface MultipleResourcePolicyTarget {
  addManyToResourcePolicy(statements: PolicyStatement[]): AddToResourcePolicyResult[];
}
