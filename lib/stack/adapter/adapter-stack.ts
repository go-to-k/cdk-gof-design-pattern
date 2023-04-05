import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AdapterConfigStackProps } from "./config";
import { BucketAdapter } from "./bucket-adapter";
import { ArnPrincipal, Effect, PolicyStatement, ServicePrincipal } from "aws-cdk-lib/aws-iam";

export class AdapterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AdapterConfigStackProps) {
    super(scope, id, props);

    const bucketAdapter = new BucketAdapter(this, "bucket-adapter");

    // 何かConstructの戻り値とか外部パタメータなどから持って来たイメージ
    const policyStatements = getPolicyStatements();

    bucketAdapter.addManyToResourcePolicy(policyStatements);
  }
}

// 再現のためのテキトー関数
const getPolicyStatements = () => {
  return [
    new PolicyStatement({
      effect: Effect.DENY,
      principals: [new ArnPrincipal("*")],
      actions: ["s3:PutObject"],
      conditions: {
        StringLike: {
          "aws:Referer": ["http://www.abc.example.com/*"],
        },
      },
    }),
    new PolicyStatement({
      effect: Effect.DENY,
      principals: [new ArnPrincipal("*")],
      actions: ["s3:GetObject"],
      conditions: {
        StringLike: {
          "aws:Referer": ["http://www.cde.example.com/*"],
        },
      },
    }),
  ];
};
