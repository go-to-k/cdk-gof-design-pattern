import * as cdk from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { CompositeConfigStackProps } from './config';
import { SampleA } from './construct/sample-a';

export class CompositeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CompositeConfigStackProps) {
    super(scope, id, props);
    
    const sampleA = new SampleA(this, "sampleA");
    
    this.addRemovalPolicy(this.node.children);
  }

  private addRemovalPolicy(children: IConstruct[]) {
    children.forEach((child) => {
      if (cdk.Resource.isResource(child)) {
        // console.log(`Resource: ${child.node.id}`);
        child.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
      } else if (Construct.isConstruct(child)) {
        // console.log(`Construct: ${child.node.id}`);
        this.addRemovalPolicy(child.node.children);
      }
    })
  }
}
