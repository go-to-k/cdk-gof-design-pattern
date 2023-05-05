import { RemovalPolicy, Resource } from "aws-cdk-lib";
import { Construct } from "constructs";

export abstract class RemovalPolicyResourceDecorator extends Resource {
  private resource: Resource;

  // constructorも拡張していると言える
  constructor(scope: Construct, id: string, resource: Resource) {
    super(scope, id);
    this.resource = resource;
    this.applyRemovalPolicy(this.getOwnRemovalPolicy());
  }

  // この例では実質このメソッドは拡張していないが
  // 本来この中の挙動を変えたりなどの拡張ができる
  applyRemovalPolicy(policy: RemovalPolicy): void {
    this.resource.applyRemovalPolicy(policy);
  }

  protected abstract getOwnRemovalPolicy(): RemovalPolicy;
}
