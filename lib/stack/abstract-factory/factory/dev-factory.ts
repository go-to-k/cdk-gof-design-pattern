import { AbstractFactory } from "./abstract-factory";
import { DevProduct } from "../product-construct/dev-product";
import { MyProduct, MyProductConstructProps } from "../product-construct/my-product";
import { Construct } from "constructs";

export class DevFactory extends AbstractFactory {
  create(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductConstructProps,
  ): MyProduct {
    return new DevProduct(scope, id, myProductConstructProps);
  }
}
