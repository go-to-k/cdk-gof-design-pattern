import { Construct } from "constructs";
import { AppModuleBConstructProps } from "../component-construct/app-b";

export interface MyProductBConstructProps {
  appModuleConstructProps: AppModuleBConstructProps;
}

export abstract class MyProductB extends Construct {
  constructor(scope: Construct, id: string, _props?: MyProductBConstructProps) {
    super(scope, id);
  }
}
