import { Construct } from "constructs";
import { AppModuleA } from "../component-construct/app-a.ts";
import { MyProductA } from "./my-product-a.ts";
import type { MyProductAConstructProps } from "./my-product-a.ts";

export class DevProductA extends MyProductA {
  constructor(scope: Construct, id: string, props: MyProductAConstructProps) {
    super(scope, id);

    new AppModuleA(this, "AppModule", props.appModuleConstructProps);
  }
}
