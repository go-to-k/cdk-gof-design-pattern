import type { StackProps } from "aws-cdk-lib";

export interface AbstractFactoryConfig {
  memorySize: number;
}

type StageType = "dev" | "prd";

export interface AbstractFactoryConfigStackProps extends StackProps {
  config: AbstractFactoryConfig;
  stage: StageType;
}

export const getAbstractFactoryConfigStackProps = (
  stage: StageType,
): AbstractFactoryConfigStackProps => {
  return {
    env: {
      region: "ap-northeast-1",
    },
    stage: stage,
    config: getAbstractFactoryStackConfig(stage),
  } as const;
};

const getAbstractFactoryStackConfig = (stage: StageType): AbstractFactoryConfig => {
  switch (stage) {
    case "dev":
      return {
        memorySize: 128,
      } as const;
    case "prd":
      return {
        memorySize: 256,
      } as const;
    default:
      throw new Error("Context value [stage] is invalid.");
  }
};
