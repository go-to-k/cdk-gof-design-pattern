import { Construct } from "constructs";
import { FacadeModuleA } from "./facade-module-a.ts";
import { FacadeModuleB } from "./facade-module-b.ts";

export interface FacadeConstructProps {}
export class Facade extends Construct {
  constructor(scope: Construct, id: string, _props?: FacadeConstructProps) {
    super(scope, id);

    new FacadeModuleA(this, "FacadeModuleA");
    new FacadeModuleB(this, "FacadeModuleB");
  }
}
