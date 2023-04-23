import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { TemplateMethodConfigStackProps } from "./config";
import { ProdValidator } from "./validator/prod-validator";
import { DevValidator } from "./validator/dev-validator";

export class TemplateMethodStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TemplateMethodConfigStackProps) {
    super(scope, id, props);

    const validator =
      props.stage === "dev" ? new DevValidator(props.config) : new ProdValidator(props.config);
    this.node.addValidation(validator);
  }
}
