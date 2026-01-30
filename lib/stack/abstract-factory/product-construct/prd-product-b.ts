import { Construct } from "constructs";
import { MyProductB } from "./my-product-b.ts";
import type { MyProductBConstructProps } from "./my-product-b.ts";
import { AppModuleB } from "../component-construct/app-b.ts";
import { BatchModuleB } from "../component-construct/batch-b.ts";

export class PrdProductB extends MyProductB {
  constructor(scope: Construct, id: string, props: MyProductBConstructProps) {
    super(scope, id);

    new AppModuleB(this, "AppModule", props.appModuleConstructProps);
    new BatchModuleB(this, "BatchModule");
  }
}
