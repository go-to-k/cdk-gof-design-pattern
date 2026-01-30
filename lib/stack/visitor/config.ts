import type { StackProps } from "aws-cdk-lib";

export interface VisitorConfig {}

export interface VisitorConfigStackProps extends StackProps {
  config: VisitorConfig;
}

export const visitorConfigStackProps: VisitorConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {},
};
