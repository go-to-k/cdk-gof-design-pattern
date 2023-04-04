import { RemovalPolicy, Resource } from "aws-cdk-lib";
import { Construct } from "constructs";

export abstract class RemovalPolicyResourceDecorator extends Resource {
    private resource: Resource;

    constructor(scope: Construct, id: string, resource: Resource) {
        super(scope, id);
        this.resource = resource;
        this.applyOwnRemovalPolicy();
    }

    private applyOwnRemovalPolicy(): void {
        this.resource.applyRemovalPolicy(this.getOwnRemovalPolicy());
    }

    abstract getOwnRemovalPolicy(): RemovalPolicy
}