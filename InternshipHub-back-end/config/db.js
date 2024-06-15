import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://anandsrivastava103:6uGXRsvIMmVqI17B@internship.lkywvvc.mongodb.net/`,
      {
        dbName: process.env.MONGODB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database seeded successfully");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
