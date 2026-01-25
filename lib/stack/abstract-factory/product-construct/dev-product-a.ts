import { Construct } from "constructs";
import { AppModuleA } from "../component-construct/app-a";
import { MyProductA, MyProductAConstructProps } from "./my-product-a";

export class DevProductA extends MyProductA {
  constructor(scope: Construct, id: string, props: MyProductAConstructProps) {
    super(scope, id);

    new AppModuleA(this, "AppModule", props.appModuleConstructProps);
  }
}
