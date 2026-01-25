import { S3Event } from "aws-lambda";

export const handler = async (_event: S3Event): Promise<void> => {
  console.log("This is app function.");
};
