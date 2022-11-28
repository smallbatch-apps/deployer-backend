import { connect } from "mongoose";

export { default as contract } from "./contracts";

export const mongoConnect = async () => {
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  console.log("Connecting to mongodb at %s on port %s", host, port);
  await connect(`mongodb://${host}:${port}/test`);
};
