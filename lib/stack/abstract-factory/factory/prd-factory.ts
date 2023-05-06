import { AbstractFactory } from "./abstract-factory";
import { MyProduct, MyProductConstructProps } from "../product-construct/abstract-my-product";
import { Construct } from "constructs";
import { PrdProduct } from "../product-construct/prd-my-product";

export class PrdFactory extends AbstractFactory {
  create(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductConstructProps,
  ): MyProduct {
    return new PrdProduct(scope, id, myProductConstructProps);
  }
}
