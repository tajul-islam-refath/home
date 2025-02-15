import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types; // couldnt use it in inteface types

export interface IPost extends mongoose.Document {
  _id: any;
  user: any;
  message: string;
  image: string;
  likes: any[];
  dislikes: any[];
  comments: any[];
}

export const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPost>("Post", PostSchema);
