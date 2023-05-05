import { StackProps } from "aws-cdk-lib";

export interface FactoryMethodConfig {}

export interface FactoryMethodConfigStackProps extends StackProps {
  config: FactoryMethodConfig;
}

export const factoryMethodConfigStackProps: FactoryMethodConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {},
};
