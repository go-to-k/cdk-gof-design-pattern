import { Construct } from "constructs";
import { MyProductA, MyProductAConstructProps } from "./my-product-a";
import { AppModuleA } from "../component-construct/app-a";
import { BatchModuleA } from "../component-construct/batch-a";
import { WafModuleA } from "../component-construct/waf-a";

export class PrdProductA extends MyProductA {
  constructor(scope: Construct, id: string, props: MyProductAConstructProps) {
    super(scope, id);

    new AppModuleA(this, "AppModule", props.appModuleConstructProps);
    new BatchModuleA(this, "BatchModule");
    new WafModuleA(this, "WafModule");
  }
}
