import type { StackProps } from "aws-cdk-lib";

export interface CompositeConfig {}

export interface CompositeConfigStackProps extends StackProps {
  config: CompositeConfig;
}

export const compositeConfigStackProps: CompositeConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {},
};
