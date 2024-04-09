import mongoose from "mongoose";

const CONNECTION_URL =
  "mongodb+srv://ariestitt:mokube123@cluster0.jozbiey.mongodb.net/memories?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_URL);
    console.log(`connected to db`)
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
