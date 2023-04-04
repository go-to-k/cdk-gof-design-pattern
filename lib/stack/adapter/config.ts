import { StackProps } from "aws-cdk-lib";

export interface AdapterConfig {
}

export interface AdapterConfigStackProps extends StackProps {
  config: AdapterConfig;
}

export const adapterConfigStackProps: AdapterConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {
  },
};