import { Annotations, IAspect, Tokenization } from "aws-cdk-lib";
import { CfnBucket } from "aws-cdk-lib/aws-s3";
import { IConstruct } from "constructs";

// 公式より: https://docs.aws.amazon.com/cdk/v2/guide/aspects.html
export class BucketVersioningChecker implements IAspect {
  public visit(node: IConstruct): void {
    // See that we're dealing with a CfnBucket
    if (node instanceof CfnBucket) {
      // Check for versioning property, exclude the case where the property
      // can be a token (IResolvable).
      if (
        !node.versioningConfiguration ||
        (!Tokenization.isResolvable(node.versioningConfiguration) &&
          node.versioningConfiguration.status !== "Enabled")
      ) {
        Annotations.of(node).addError("Bucket versioning is not enabled");
      }
    }
  }
}
