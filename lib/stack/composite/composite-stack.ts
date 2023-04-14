import * as cdk from "aws-cdk-lib";
import { Construct, IConstruct } from "constructs";
import { CompositeConfigStackProps } from "./config";
import { RetainConstruct } from "./construct/retain-construct";
import { Queue } from "aws-cdk-lib/aws-sqs";

export class CompositeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CompositeConfigStackProps) {
    super(scope, id, props);

    // ダミー
    new Queue(this, "OtherQueue");

    // 特定コンストラクト内リソースを全部RETAINにしたり
    const retainConstruct = new RetainConstruct(this, "RetainConstruct");
    this.addRemovalPolicy(retainConstruct.node.children, cdk.RemovalPolicy.RETAIN);

    // 開発環境などでスタック内の全リソース削除したい場合、一括指定も可
    this.addRemovalPolicy(this.node.children, cdk.RemovalPolicy.DESTROY);
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
