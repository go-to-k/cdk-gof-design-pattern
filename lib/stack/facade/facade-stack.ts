import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FacadeModuleA } from './construct/facade-module-a';
import { FacadeConfigStackProps } from './config';
import { FacadeModuleB } from './construct/facade-module-b';
import { Facade } from './construct/facade';

export class FacadeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FacadeConfigStackProps) {
    super(scope, id, props);
    
    new Facade(this, "facade")
  }
}
