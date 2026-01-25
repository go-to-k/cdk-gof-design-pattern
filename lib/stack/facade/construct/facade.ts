import { Construct } from "constructs";
import { FacadeModuleA } from "./facade-module-a";
import { FacadeModuleB } from "./facade-module-b";

export interface FacadeConstructProps {}
export class Facade extends Construct {
  constructor(scope: Construct, id: string, _props?: FacadeConstructProps) {
    super(scope, id);

    new FacadeModuleA(this, "FacadeModuleA");
    new FacadeModuleB(this, "FacadeModuleB");
  }
}
