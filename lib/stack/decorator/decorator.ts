import { RemovalPolicy, Resource } from "aws-cdk-lib";
import { Construct } from "constructs";

export abstract class RemovalPolicyResourceDecorator extends Resource {
    private resource: Resource;

    constructor(scope: Construct, id: string, resource: Resource) {
        super(scope, id);
        this.resource = resource;
        this.applyRemovalPolicy(this.getOwnRemovalPolicy());
    }

    applyRemovalPolicy(policy: RemovalPolicy): void {
        this.resource.applyRemovalPolicy(policy);
    }

    abstract getOwnRemovalPolicy(): RemovalPolicy
}