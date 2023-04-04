import { Construct } from "constructs";
import { RemovalPolicyResourceDecorator } from "./decorator";
import { RemovalPolicy, Resource } from "aws-cdk-lib";

export class RetainRemovalPolicyDecorator extends RemovalPolicyResourceDecorator {
    constructor(scope: Construct, id: string, resource: Resource) {
        super(scope, id, resource);
    }

    getOwnRemovalPolicy(): RemovalPolicy {
        return RemovalPolicy.RETAIN;
    }
}