import { AbstractFactory } from "./abstract-factory.ts";
import { DevProductA } from "../product-construct/dev-product-a.ts";
import { Construct } from "constructs";
import { MyProductA } from "../product-construct/my-product-a.ts";
import type { MyProductAConstructProps } from "../product-construct/my-product-a.ts";
import { MyProductB } from "../product-construct/my-product-b.ts";
import type { MyProductBConstructProps } from "../product-construct/my-product-b.ts";
import { DevProductB } from "../product-construct/dev-product-b.ts";

export class DevFactory extends AbstractFactory {
  createProductA(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductAConstructProps,
  ): MyProductA {
    return new DevProductA(scope, id, myProductConstructProps);
  }

  createProductB(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductBConstructProps,
  ): MyProductB {
    return new DevProductB(scope, id, myProductConstructProps);
  }
}
