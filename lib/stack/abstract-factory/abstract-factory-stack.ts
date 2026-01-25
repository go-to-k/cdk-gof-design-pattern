import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AbstractFactoryConfigStackProps } from "./config";
import { DevFactory } from "./factory/dev-factory";
import { PrdFactory } from "./factory/prd-factory";

export class AbstractFactoryStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AbstractFactoryConfigStackProps) {
    super(scope, id, props);

    const factory = props.stage === "prd" ? new PrdFactory() : new DevFactory();

    factory.createProductA(this, "ProductA", {
      appModuleConstructProps: {
        memorySize: props.config.memorySize,
      },
    });

    factory.createProductB(this, "ProductB", {
      appModuleConstructProps: {
        memorySize: props.config.memorySize,
      },
    });
  }
}
