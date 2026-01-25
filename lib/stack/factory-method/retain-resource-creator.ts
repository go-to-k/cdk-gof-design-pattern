import { RemovalPolicy, Resource } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export abstract class RetainResourceCreator {
  create(scope: Construct, id: string): Resource {
    const resource = this.createResource(scope, id);
    resource.applyRemovalPolicy(RemovalPolicy.RETAIN);
    return resource;
  }

  protected abstract createResource(scope: Construct, id: string): Resource;
}
