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
import { SingletonStack } from "../lib/stack/singleton/singleton-stack";
import { singletonConfigStackProps } from "../lib/stack/singleton/config";
import { VisitorStack } from "../lib/stack/visitor/visitor-stack";
import { visitorConfigStackProps } from "../lib/stack/visitor/config";
import { BucketVersioningChecker } from "../lib/stack/visitor/aspect";
import { StrategyStack } from "../lib/stack/strategy/strategy-stack";
import { strategyConfigStackProps } from "../lib/stack/strategy/config";
import { FactoryMethodStack } from "../lib/stack/factory-method/factory-method-stack";
import { factoryMethodConfigStackProps } from "../lib/stack/factory-method/config";

const app = new cdk.App();

new CompositeStack(app, "CompositeStack", compositeConfigStackProps);

new FacadeStack(app, "FacadeStack", facadeConfigStackProps);

new AdapterStack(app, "AdapterStack", adapterConfigStackProps);

new SingletonStack(app, "SingletonStack", singletonConfigStackProps);

new StrategyStack(app, "StrategyStack", strategyConfigStackProps);

new TemplateMethodStack(app, "TemplateMethodStack", getTemplateMethodConfigStackProps("dev"));

new FactoryMethodStack(app, "FactoryMethodStack", factoryMethodConfigStackProps);

new DecoratorStack(app, "DecoratorStack", decoratorConfigStackProps);

const visitorStack = new VisitorStack(app, "VisitorStack", visitorConfigStackProps);
cdk.Aspects.of(visitorStack).add(new BucketVersioningChecker());
