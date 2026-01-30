import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import type { SingletonConfigStackProps } from "./config.ts";
import { Code, Runtime, SingletonFunction } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { MySingletonFunction } from "./my-singleton-function.ts";

export class SingletonStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SingletonConfigStackProps) {
    super(scope, id, props);

    // SingletonFunction provided by AWS
    // No matter how many times you call it, they only make one.
    this.createLambda("A");
    this.createLambda("B");
    this.createLambda("C");

    // MySingletonFunction of my own creation (inherits from NodejsFunction)
    // No matter how many times you call it, they only make one.
    this.createMyLambda("A");
    this.createMyLambda("B");
    this.createMyLambda("C");
  }

  // Deploy after `pnpm build-singleton` in repository's root directory
  private createLambda(suffix: string): SingletonFunction {
    return new SingletonFunction(this, `Singleton${suffix}`, {
      uuid: "ff5cb24a-ea95-11ed-a05b-0242ac120003",
      code: Code.fromAsset(join(import.meta.dirname, "./lambda")),
      handler: "index.handler",
      runtime: Runtime.NODEJS_18_X,
    });
  }

  private createMyLambda(suffix: string): MySingletonFunction {
    return MySingletonFunction.getInstance(this, `MySingleton${suffix}`, {
      entry: join(import.meta.dirname, "./lambda/index.ts"),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
