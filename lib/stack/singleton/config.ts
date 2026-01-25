import { StackProps } from "aws-cdk-lib";

export interface SingletonConfig {}

export interface SingletonConfigStackProps extends StackProps {
  config: SingletonConfig;
}

export const singletonConfigStackProps: SingletonConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {},
};
