#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { compositeConfigStackProps } from "../lib/stack/composite/config";
import { CompositeStack } from "../lib/stack/composite/composite-stack";
import { DecoratorStack } from "../lib/stack/decorator/decorator-stack";
import { decoratorConfigStackProps } from "../lib/stack/decorator/config";
import { FacadeStack } from "../lib/stack/facade/facade-stack";
import { facadeConfigStackProps } from "../lib/stack/facade/config";
import { AdapterStack } from "../lib/stack/adapter/adapter-stack";
import { adapterConfigStackProps } from "../lib/stack/adapter/config";
import { TemplateMethodStack } from "../lib/stack/template-method/template-method-stack";
import { getTemplateMethodConfigStackProps } from "../lib/stack/template-method/config";

const app = new cdk.App();

new CompositeStack(app, "CompositeStack", compositeConfigStackProps);
new DecoratorStack(app, "DecoratorStack", decoratorConfigStackProps);
new FacadeStack(app, "FacadeStack", facadeConfigStackProps);
new AdapterStack(app, "AdapterStack", adapterConfigStackProps);
new TemplateMethodStack(app, "TemplateMethodStack", getTemplateMethodConfigStackProps("dev"));
