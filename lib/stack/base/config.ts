import { StackProps } from "aws-cdk-lib";

export interface Config {
  scopeType: string;
}

export interface ConfigStackProps extends StackProps {
  config: Config;
}

export const configStackProps: ConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {
    scopeType: "CLOUDFRONT",
  },
};