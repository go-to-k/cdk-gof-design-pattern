import { StackProps } from "aws-cdk-lib";

export interface TemplateMethodConfig {
  cpu: number;
  memoryLimitMiB: number;
  desiredCount: number;
}

type Stage = "dev" | "prd";

export interface TemplateMethodConfigStackProps extends StackProps {
  stage: Stage;
  config: TemplateMethodConfig;
}

export const getTemplateMethodConfigStackProps = (stage: Stage): TemplateMethodConfigStackProps => {
  return {
    env: {
      region: "ap-northeast-1",
    },
    stage: stage,
    config: getTemplateMethodStackConfig(stage),
  } as const;
};

const getTemplateMethodStackConfig = (stage: Stage): TemplateMethodConfig => {
  switch (stage) {
    case "dev":
      stage;
      return {
        cpu: 1024,
        memoryLimitMiB: 2048,
        desiredCount: 2,
      } as const;
    case "prd":
      return {
        cpu: 4096,
        memoryLimitMiB: 8192,
        desiredCount: 6,
      } as const;
    default:
      throw new Error("Context value [stageEnv] is invalid.");
  }
};
