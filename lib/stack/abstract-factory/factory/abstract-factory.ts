import { Construct } from "constructs";
import { MyProductA, MyProductAConstructProps } from "../product-construct/my-product-a";
import { MyProductB, MyProductBConstructProps } from "../product-construct/my-product-b";

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
