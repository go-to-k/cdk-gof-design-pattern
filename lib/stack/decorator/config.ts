import type { StackProps } from "aws-cdk-lib";

export interface DecoratorConfig {}

export interface DecoratorConfigStackProps extends StackProps {
  config: DecoratorConfig;
}

export const decoratorConfigStackProps: DecoratorConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {},
};
