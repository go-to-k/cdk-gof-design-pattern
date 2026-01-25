import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { FacadeModuleA } from './facade-module-a';

export interface FacadeModuleBConstructProps {}
export class FacadeModuleB extends Construct {
  constructor(scope: Construct, id: string, _props?: FacadeModuleBConstructProps) {
    super(scope, id);

    // Assumptions of complex and numerous resource definitions
    new Queue(this, `${id}SQSQueue1`);
    new Queue(this, `${id}SQSQueue2`);

    // FacadeA can also be called
    new FacadeModuleA(this, 'FacadeBA');
  }
}
