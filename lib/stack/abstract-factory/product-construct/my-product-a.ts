import { Construct } from 'constructs';
import { AppModuleAConstructProps } from '../component-construct/app-a';

export interface MyProductAConstructProps {
  appModuleConstructProps: AppModuleAConstructProps;
}

export abstract class MyProductA extends Construct {
  constructor(scope: Construct, id: string, _props?: MyProductAConstructProps) {
    super(scope, id);
  }
}
