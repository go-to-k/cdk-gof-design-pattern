import { Construct } from "constructs";
import { AppModuleConstructProps } from "../component-construct/app";

export interface MyProductConstructProps {
  appModuleConstructProps: AppModuleConstructProps;
}

export abstract class MyProduct extends Construct {
  constructor(scope: Construct, id: string, props?: MyProductConstructProps) {
    super(scope, id);
  }
}
