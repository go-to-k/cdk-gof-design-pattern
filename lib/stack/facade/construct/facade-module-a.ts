import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export interface FacadeModuleAConstructProps {}
export class FacadeModuleA extends Construct {
  constructor(scope: Construct, id: string, props?: FacadeModuleAConstructProps) {
    super(scope, id);

    // Assumptions of complex and numerous resource definitions
    new Queue(this, `${id}SQSQueue1`);
    new Queue(this, `${id}SQSQueue2`);
  }
}
