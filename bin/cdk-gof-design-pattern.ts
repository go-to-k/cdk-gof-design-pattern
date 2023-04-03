#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { compositeConfigStackProps } from '../lib/stack/composite/config';
import { CompositeStack } from '../lib/stack/composite/composite-stack';

const app = new cdk.App();
new CompositeStack(app, 'CompositeStack', compositeConfigStackProps);