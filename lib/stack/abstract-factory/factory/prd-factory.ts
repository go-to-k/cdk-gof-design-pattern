import { AbstractFactory } from './abstract-factory';
import { Construct } from 'constructs';
import { MyProductA, MyProductAConstructProps } from '../product-construct/my-product-a';
import { MyProductB, MyProductBConstructProps } from '../product-construct/my-product-b';
import { PrdProductA } from '../product-construct/prd-product-a';
import { PrdProductB } from '../product-construct/prd-product-b';

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
