import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AdapterConfigStackProps } from "./config";
import { BucketAdapter } from "./bucket-adapter";
import { AnyPrincipal, Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

export class AdapterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AdapterConfigStackProps) {
    super(scope, id, props);

    // カスタムメソッド付きバケット生成
    const bucketAdapter = new BucketAdapter(this, "BucketAdapter");

    // 複数のPolicyStatement生成
    const policyStatements = this.createPolicyStatements(bucketAdapter.bucketArn);

    // 複数PolicyStatementを一括適用
    bucketAdapter.addManyToResourcePolicy(policyStatements);
  }

  private createPolicyStatements(bucketArn: string): PolicyStatement[] {
    return [
      new PolicyStatement({
        effect: Effect.DENY,
        principals: [new AnyPrincipal()],
        actions: ["s3:PutObject"],
        resources: [`${bucketArn}/*`],
        conditions: {
          StringLike: {
            "aws:Referer": ["http://www.abc.example.com/*"],
          },
        },
      }),
      new PolicyStatement({
        effect: Effect.DENY,
        principals: [new AnyPrincipal()],
        actions: ["s3:GetObject"],
        resources: [`${bucketArn}/*`],
        conditions: {
          StringLike: {
            "aws:Referer": ["http://www.cde.example.com/*"],
          },
        },
      }),
    ];
  }
}
