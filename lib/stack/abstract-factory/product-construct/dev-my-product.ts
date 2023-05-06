import { Construct } from "constructs";
import { AppModule } from "../component-construct/app";
import { MyProduct, MyProductConstructProps } from "./abstract-my-product";

export class DevProduct extends MyProduct {
  constructor(scope: Construct, id: string, props: MyProductConstructProps) {
    super(scope, id);

    new AppModule(this, "AppModule", props.appModuleConstructProps);
  }
}
