import { StackProps } from "aws-cdk-lib";

export interface AbstractFactoryConfig {
  memorySize: number;
}

type Stage = "dev" | "prd";

export interface AbstractFactoryConfigStackProps extends StackProps {
  config: AbstractFactoryConfig;
  stage: Stage;
}

export const getAbstractFactoryConfigStackProps = (
  stage: Stage,
): AbstractFactoryConfigStackProps => {
  return {
    env: {
      region: "ap-northeast-1",
    },
    stage: stage,
    config: getAbstractFactoryStackConfig(stage),
  } as const;
};

const getAbstractFactoryStackConfig = (stage: Stage): AbstractFactoryConfig => {
  switch (stage) {
    case "dev":
      stage;
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
