import { AbstractFactory } from './abstract-factory';
import { DevProductA } from '../product-construct/dev-product-a';
import { Construct } from 'constructs';
import { MyProductA, MyProductAConstructProps } from '../product-construct/my-product-a';
import { MyProductB, MyProductBConstructProps } from '../product-construct/my-product-b';
import { DevProductB } from '../product-construct/dev-product-b';

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
