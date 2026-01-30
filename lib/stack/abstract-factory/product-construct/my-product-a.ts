import { Construct } from "constructs";
import type { AppModuleAConstructProps } from "../component-construct/app-a.ts";

export interface MyProductAConstructProps {
  appModuleConstructProps: AppModuleAConstructProps;
}

export abstract class MyProductA extends Construct {
  constructor(scope: Construct, id: string, _props?: MyProductAConstructProps) {
    super(scope, id);
  }
}
