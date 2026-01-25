import { CfnWebACL } from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

export interface WafModuleAConstructProps {}

export class WafModuleA extends Construct {
  constructor(scope: Construct, id: string, _props?: WafModuleAConstructProps) {
    super(scope, id);

    new CfnWebACL(this, 'WebAclA', {
      name: 'WebAclA',
      defaultAction: { block: {} },
      scope: 'REGIONAL',
      visibilityConfig: {
        cloudWatchMetricsEnabled: false,
        metricName: 'WebAclA',
        sampledRequestsEnabled: false,
      },
    });
  }
}
