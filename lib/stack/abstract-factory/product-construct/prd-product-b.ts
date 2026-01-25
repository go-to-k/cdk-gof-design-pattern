import { Construct } from "constructs";
import { MyProductB, MyProductBConstructProps } from "./my-product-b";
import { AppModuleB } from "../component-construct/app-b";
import { BatchModuleB } from "../component-construct/batch-b";

export class PrdProductB extends MyProductB {
  constructor(scope: Construct, id: string, props: MyProductBConstructProps) {
    super(scope, id);

    new AppModuleB(this, "AppModule", props.appModuleConstructProps);
    new BatchModuleB(this, "BatchModule");
  }
}
