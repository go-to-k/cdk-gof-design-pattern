import { CfnWebACL } from "aws-cdk-lib/aws-wafv2";
import { Construct } from "constructs";

export interface WafModuleConstructProps {}

export class WafModule extends Construct {
  constructor(scope: Construct, id: string, props?: WafModuleConstructProps) {
    super(scope, id);

    new CfnWebACL(this, "WebAcl", {
      name: "WebAcl",
      defaultAction: { block: {} },
      scope: "REGIONAL",
      visibilityConfig: {
        cloudWatchMetricsEnabled: false,
        metricName: "WebAcl",
        sampledRequestsEnabled: false,
      },
    });
  }
}
