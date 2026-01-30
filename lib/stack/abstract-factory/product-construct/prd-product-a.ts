import { Construct } from "constructs";
import { MyProductA } from "./my-product-a.ts";
import type { MyProductAConstructProps } from "./my-product-a.ts";
import { AppModuleA } from "../component-construct/app-a.ts";
import { BatchModuleA } from "../component-construct/batch-a.ts";
import { WafModuleA } from "../component-construct/waf-a.ts";

export class PrdProductA extends MyProductA {
  constructor(scope: Construct, id: string, props: MyProductAConstructProps) {
    super(scope, id);

    new AppModuleA(this, "AppModule", props.appModuleConstructProps);
    new BatchModuleA(this, "BatchModule");
    new WafModuleA(this, "WafModule");
  }
}
