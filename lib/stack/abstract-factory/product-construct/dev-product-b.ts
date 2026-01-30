import { Construct } from "constructs";
import { MyProductB } from "./my-product-b.ts";
import type { MyProductBConstructProps } from "./my-product-b.ts";
import { AppModuleB } from "../component-construct/app-b.ts";

export class DevProductB extends MyProductB {
  constructor(scope: Construct, id: string, props: MyProductBConstructProps) {
    super(scope, id);

    new AppModuleB(this, "AppModule", props.appModuleConstructProps);
  }
}
