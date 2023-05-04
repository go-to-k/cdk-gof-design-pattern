import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { SingletonConfigStackProps } from "./config";
import { Code, Runtime, SingletonFunction } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { MySingletonFunction } from "./my-singleton-function";

export class SingletonStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SingletonConfigStackProps) {
    super(scope, id, props);

    // AWS提供のSingletonFunction
    // 何度呼んでも一つしか作られない
    this.createLambda("A");
    this.createLambda("B");

    // 自作のSingletonFunction
    // 何度呼んでも一つしか作られない
    this.createMyLambda("A");
    this.createMyLambda("B");
  }

  // トップディレクトリで`yarn build-singleton`してからデプロイ
  private createLambda(suffix: string): SingletonFunction {
    return new SingletonFunction(this, `Singleton${suffix}`, {
      uuid: "ff5cb24a-ea95-11ed-a05b-0242ac120003",
      code: Code.fromAsset(join(__dirname, "./lambda")),
      handler: "index.handler",
      runtime: Runtime.NODEJS_18_X,
    });
  }

  private createMyLambda(suffix: string): MySingletonFunction {
    return MySingletonFunction.getInstance(this, `MySingleton${suffix}`, {
      entry: join(__dirname, "./lambda/index.ts"),
      bundling: {
        forceDockerBundling: false,
      },
    });
  }
}
