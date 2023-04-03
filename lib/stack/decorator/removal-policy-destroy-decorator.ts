import { Construct } from "constructs";
import { Decorator } from "./decorator";
import { RemovalPolicy, Resource } from "aws-cdk-lib";

export class RemovalPolicyDestroyDecorator extends Decorator {
    constructor(scope: Construct, id: string, resource: Resource) {
        super(scope, id, resource);
        this.applyDeletionPolicy();
    }

    applyDeletionPolicy(): void {
        this.resource.applyRemovalPolicy(RemovalPolicy.DESTROY);
    }
}