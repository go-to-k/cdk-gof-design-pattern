import type { StackProps } from "aws-cdk-lib";

export interface StrategyConfig {
  scopeType: string;
}

export interface StrategyConfigStackProps extends StackProps {
  config: StrategyConfig;
}

export const strategyConfigStackProps: StrategyConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {
    scopeType: "REGIONAL",
    // scopeType: "CLOUDFRONT",
  },
};
