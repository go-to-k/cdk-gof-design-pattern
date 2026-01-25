import { Construct } from 'constructs';
import { RemovalPolicyResourceDecorator } from './removal-policy-resource-decorator';
import { RemovalPolicy, Resource } from 'aws-cdk-lib';

export class RetainRemovalPolicyDecorator extends RemovalPolicyResourceDecorator {
  constructor(scope: Construct, id: string, resource: Resource) {
    super(scope, id, resource);
  }

  protected getOwnRemovalPolicy(): RemovalPolicy {
    return RemovalPolicy.RETAIN;
  }
}
