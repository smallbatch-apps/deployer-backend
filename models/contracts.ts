import { Schema, model } from "mongoose";

const modelName = "Contract";

interface IModel {
  name: string;
  email: string;
  avatar?: string;
}

const schema = new Schema<IModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

export default model<IModel>(modelName, schema);
