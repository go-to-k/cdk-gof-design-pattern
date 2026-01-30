import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import type { AbstractFactoryConfigStackProps } from "./config.ts";
import { DevFactory } from "./factory/dev-factory.ts";
import { PrdFactory } from "./factory/prd-factory.ts";

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
