import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL!;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(MONGO_URL);
  console.log("MongoDB Connected");
};


// gwvdBDLryz420Iqk

// mongodb+srv://vengateshmarvel_db_user:gwvdBDLryz420Iqk@cluster0.pzxh4cn.mongodb.net/?appName=Cluster0