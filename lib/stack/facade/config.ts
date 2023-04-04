import { StackProps } from "aws-cdk-lib";

export interface FacadeConfig {
}

export interface FacadeConfigStackProps extends StackProps {
  config: FacadeConfig;
}

export const facadeConfigStackProps: FacadeConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {
  },
};