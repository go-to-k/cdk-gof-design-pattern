import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";
import { SampleB } from "./sample-b";

export interface SampleAConstructProps {
}
export class SampleA extends Construct {
    constructor(scope: Construct, id: string, props?: SampleAConstructProps) {
        super(scope, id);
        new Queue(this, 'sqs-queueA1');
        new Queue(this, 'sqs-queueA2');
        new SampleB(this, 'sampleB');
    }
}
