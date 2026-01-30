import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import type { FacadeConfigStackProps } from "./config.ts";
import { Facade } from "./construct/facade.ts";

export class FacadeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FacadeConfigStackProps) {
    super(scope, id, props);

    new Facade(this, "Facade");
  }
}
