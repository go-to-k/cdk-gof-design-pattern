#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { compositeConfigStackProps } from "../lib/stack/composite/config.ts";
import { CompositeStack } from "../lib/stack/composite/composite-stack.ts";
import { DecoratorStack } from "../lib/stack/decorator/decorator-stack.ts";
import { decoratorConfigStackProps } from "../lib/stack/decorator/config.ts";
import { FacadeStack } from "../lib/stack/facade/facade-stack.ts";
import { facadeConfigStackProps } from "../lib/stack/facade/config.ts";
import { AdapterStack } from "../lib/stack/adapter/adapter-stack.ts";
import { adapterConfigStackProps } from "../lib/stack/adapter/config.ts";
import { TemplateMethodStack } from "../lib/stack/template-method/template-method-stack.ts";
import { getTemplateMethodConfigStackProps } from "../lib/stack/template-method/config.ts";
import { SingletonStack } from "../lib/stack/singleton/singleton-stack.ts";
import { singletonConfigStackProps } from "../lib/stack/singleton/config.ts";
import { VisitorStack } from "../lib/stack/visitor/visitor-stack.ts";
import { visitorConfigStackProps } from "../lib/stack/visitor/config.ts";
import { BucketVersioningChecker } from "../lib/stack/visitor/aspect.ts";
import { StrategyStack } from "../lib/stack/strategy/strategy-stack.ts";
import { strategyConfigStackProps } from "../lib/stack/strategy/config.ts";
import { FactoryMethodStack } from "../lib/stack/factory-method/factory-method-stack.ts";
import { factoryMethodConfigStackProps } from "../lib/stack/factory-method/config.ts";
import { AbstractFactoryStack } from "../lib/stack/abstract-factory/abstract-factory-stack.ts";
import { getAbstractFactoryConfigStackProps } from "../lib/stack/abstract-factory/config.ts";

const app = new cdk.App();

new CompositeStack(app, "CompositeStack", compositeConfigStackProps);

new FacadeStack(app, "FacadeStack", facadeConfigStackProps);

new AdapterStack(app, "AdapterStack", adapterConfigStackProps);

new DecoratorStack(app, "DecoratorStack", decoratorConfigStackProps);

new SingletonStack(app, "SingletonStack", singletonConfigStackProps);

new StrategyStack(app, "StrategyStack", strategyConfigStackProps);

new TemplateMethodStack(app, "TemplateMethodStack", getTemplateMethodConfigStackProps("dev"));

new FactoryMethodStack(app, "FactoryMethodStack", factoryMethodConfigStackProps);

new AbstractFactoryStack(app, "AbstractFactoryStack", getAbstractFactoryConfigStackProps("dev"));

const visitorStack = new VisitorStack(app, "VisitorStack", visitorConfigStackProps);
cdk.Aspects.of(visitorStack).add(new BucketVersioningChecker());
