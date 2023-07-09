import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AdapterConfigStackProps } from "./config";
import { BucketAdapter } from "./bucket-adapter";
import { AnyPrincipal, Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

export class AdapterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AdapterConfigStackProps) {
    super(scope, id, props);

    // Create Bucket with custom methods
    const bucketAdapter = new BucketAdapter(this, "BucketAdapter");

    // Create Some PolicyStatements
    const policyStatements = this.createPolicyStatements(bucketAdapter.bucketArn);

    // Apply multiple PolicyStatements at once
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
