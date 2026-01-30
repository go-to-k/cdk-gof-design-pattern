import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import type { IConstruct } from "constructs";
import type { CompositeConfigStackProps } from "./config.ts";
import { RetainConstruct } from "./construct/retain-construct.ts";
import { Queue } from "aws-cdk-lib/aws-sqs";

export class CompositeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CompositeConfigStackProps) {
    super(scope, id, props);

    // Dummy
    new Queue(this, "OtherQueue");

    // Ex.1) Can delete all resources in a stack in a development environment, etc.
    this.addRemovalPolicy(this.node.children, cdk.RemovalPolicy.DESTROY);

    // Ex.2) RETAIN all resources in a specific construct.
    const retainConstruct = new RetainConstruct(this, "RetainConstruct");
    this.addRemovalPolicy(retainConstruct.node.children, cdk.RemovalPolicy.RETAIN);
  }

  private addRemovalPolicy(children: IConstruct[], removalPolicy: cdk.RemovalPolicy) {
    children.forEach((child) => {
      if (cdk.Resource.isResource(child)) {
        child.applyRemovalPolicy(removalPolicy);
      } else if (Construct.isConstruct(child)) {
        this.addRemovalPolicy(child.node.children, removalPolicy);
      }
    });
  }
}
