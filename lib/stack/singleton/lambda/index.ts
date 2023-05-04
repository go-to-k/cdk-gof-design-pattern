import { S3Event } from "aws-lambda";

export const handler = async (event: S3Event): Promise<void> => {
  event.Records.forEach((record) => console.log(record.s3.object.key));
};
