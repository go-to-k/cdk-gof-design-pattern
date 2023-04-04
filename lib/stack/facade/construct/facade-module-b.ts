import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";
import { FacadeModuleA } from "./facade-module-a";

export interface FacadeModuleBConstructProps {
}
export class FacadeModuleB extends Construct {
    constructor(scope: Construct, id: string, props?: FacadeModuleBConstructProps) {
        super(scope, id);

        // 複雑で多いリソース定義という想定
        new Queue(this, `${id}-sqs-queue1`);
        new Queue(this, `${id}-sqs-queue2`);

        // FacadeAも呼んだり
        new FacadeModuleA(this, "facade-b-a")

    }
}
