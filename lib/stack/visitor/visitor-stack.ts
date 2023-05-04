import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VisitorConfigStackProps } from "./config";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketVersioningChecker } from "./aspect";

export class VisitorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: VisitorConfigStackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "Bucket", {
      versioned: true,
    });
    cdk.Aspects.of(bucket).add(new BucketVersioningChecker());
  }
}