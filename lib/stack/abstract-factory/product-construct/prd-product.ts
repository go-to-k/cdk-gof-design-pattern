import { Construct } from "constructs";
import { AppModule } from "../component-construct/app";
import { BatchModule } from "../component-construct/batch";
import { WafModule } from "../component-construct/waf";
import { MyProduct, MyProductConstructProps } from "./my-product";

export class PrdProduct extends MyProduct {
  constructor(scope: Construct, id: string, props: MyProductConstructProps) {
    super(scope, id);

    new AppModule(this, "AppModule", props.appModuleConstructProps);
    new BatchModule(this, "BatchModule");
    new WafModule(this, "WafModule");
  }
}
