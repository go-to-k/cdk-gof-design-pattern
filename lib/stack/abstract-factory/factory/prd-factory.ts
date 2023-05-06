import { AbstractFactory } from "./abstract-factory";
import { MyProduct, MyProductConstructProps } from "../product-construct/my-product";
import { Construct } from "constructs";
import { PrdProduct } from "../product-construct/prd-product";

export class PrdFactory extends AbstractFactory {
  create(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductConstructProps,
  ): MyProduct {
    return new PrdProduct(scope, id, myProductConstructProps);
  }
}
