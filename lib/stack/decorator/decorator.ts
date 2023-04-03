import { Resource } from "aws-cdk-lib";
import { Construct } from "constructs";

export abstract class Decorator extends Resource {
    protected resource: Resource;

    constructor(scope: Construct, id: string, resource: Resource) {
        super(scope, id);
        this.resource = resource;
    }
}