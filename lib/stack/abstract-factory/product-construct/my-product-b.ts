import { Construct } from "constructs";
import type { AppModuleBConstructProps } from "../component-construct/app-b.ts";

export interface MyProductBConstructProps {
  appModuleConstructProps: AppModuleBConstructProps;
}

export abstract class MyProductB extends Construct {
  constructor(scope: Construct, id: string, _props?: MyProductBConstructProps) {
    super(scope, id);
  }
}
