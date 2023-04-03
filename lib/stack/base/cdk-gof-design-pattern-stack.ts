import * as cdk from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';
import { ConfigStackProps } from './config';
import { MyValidator } from './my-validator';
import { SampleA } from '../../construct/sample-a';

export class CdkGoFDesignPatternStack extends cdk.Stack {
  private scopeType: string;
  private validationListConstruct: Construct[];

  constructor(scope: Construct, id: string, props: ConfigStackProps) {
    super(scope, id, props);
    this.init(props);
    
    const sampleA = new SampleA(this, "sampleA")
    
    this.addRemovalPolicy(this.node.children);
  }

  private init(props: ConfigStackProps) {
    this.scopeType = props.config.scopeType;

    const validator = new MyValidator(this.scopeType, this.region);
    this.node.addValidation(validator);
  }

  private addRemovalPolicy(children: IConstruct[]) {
    children.forEach((child) => {
      if (cdk.Resource.isResource(child)) {
        // console.log(`Resource: ${child.node.id}`)
        child.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY)
      } else if (Construct.isConstruct(child)) {
        // console.log(`Construct: ${child.node.id}`)
        this.addRemovalPolicy(child.node.children)
      }
    })
  }
}
