import { RemovalPolicy, Resource } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export abstract class RemovalPolicyResourceDecorator extends Resource {
  private resource: Resource;

  // Extended constructor
  constructor(scope: Construct, id: string, resource: Resource) {
    super(scope, id);
    this.resource = resource;
    this.applyRemovalPolicy(this.getOwnRemovalPolicy());
  }

  // In this example, this method is not extended in effect,
  // but it can be extended to change the behavior of this method, etc.
  applyRemovalPolicy(policy: RemovalPolicy): void {
    this.resource.applyRemovalPolicy(policy);
  }

  protected abstract getOwnRemovalPolicy(): RemovalPolicy;
}
