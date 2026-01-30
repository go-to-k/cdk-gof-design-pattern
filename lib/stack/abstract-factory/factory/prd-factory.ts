import { AbstractFactory } from "./abstract-factory.ts";
import { Construct } from "constructs";
import { MyProductA } from "../product-construct/my-product-a.ts";
import type { MyProductAConstructProps } from "../product-construct/my-product-a.ts";
import { MyProductB } from "../product-construct/my-product-b.ts";
import type { MyProductBConstructProps } from "../product-construct/my-product-b.ts";
import { PrdProductA } from "../product-construct/prd-product-a.ts";
import { PrdProductB } from "../product-construct/prd-product-b.ts";

export class PrdFactory extends AbstractFactory {
  createProductA(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductAConstructProps,
  ): MyProductA {
    return new PrdProductA(scope, id, myProductConstructProps);
  }

  createProductB(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductBConstructProps,
  ): MyProductB {
    return new PrdProductB(scope, id, myProductConstructProps);
  }
}
