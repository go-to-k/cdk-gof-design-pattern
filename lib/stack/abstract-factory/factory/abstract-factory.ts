import { Construct } from "constructs";
import { MyProductA } from "../product-construct/my-product-a.ts";
import type { MyProductAConstructProps } from "../product-construct/my-product-a.ts";
import { MyProductB } from "../product-construct/my-product-b.ts";
import type { MyProductBConstructProps } from "../product-construct/my-product-b.ts";

export abstract class AbstractFactory {
  abstract createProductA(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductAConstructProps,
  ): MyProductA;

  abstract createProductB(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductBConstructProps,
  ): MyProductB;
}
