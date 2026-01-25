import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { FacadeConfigStackProps } from "./config";
import { Facade } from "./construct/facade";

export class FacadeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FacadeConfigStackProps) {
    super(scope, id, props);

    new Facade(this, "Facade");
  }
}
