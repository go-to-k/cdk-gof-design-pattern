import { Construct } from "constructs";
import { MyProduct, MyProductConstructProps } from "../product-construct/my-product";

export abstract class AbstractFactory {
  abstract create(
    scope: Construct,
    id: string,
    myProductConstructProps: MyProductConstructProps,
  ): MyProduct;
}
