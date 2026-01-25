import { Construct } from 'constructs';
import { MyProductB, MyProductBConstructProps } from './my-product-b';
import { AppModuleB } from '../component-construct/app-b';

export class DevProductB extends MyProductB {
  constructor(scope: Construct, id: string, props: MyProductBConstructProps) {
    super(scope, id);

    new AppModuleB(this, 'AppModule', props.appModuleConstructProps);
  }
}
