import type { StackProps } from "aws-cdk-lib";

export interface TemplateMethodConfig {
  cpu: number;
  memoryLimitMiB: number;
  desiredCount: number;
}

type StageType = "dev" | "prd";

export interface TemplateMethodConfigStackProps extends StackProps {
  stage: StageType;
  config: TemplateMethodConfig;
}

export const getTemplateMethodConfigStackProps = (
  stage: StageType,
): TemplateMethodConfigStackProps => {
  return {
    env: {
      region: "ap-northeast-1",
    },
    stage: stage,
    config: getTemplateMethodStackConfig(stage),
  } as const;
};

const getTemplateMethodStackConfig = (stage: StageType): TemplateMethodConfig => {
  switch (stage) {
    case "dev":
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
      throw new Error("Context value [stage] is invalid.");
  }
};
