import mongoose from "mongoose";
const   connectDB = async () => {
  try {
  
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to DB.");
      return;
    }

    
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connected to DB successfully");
  } catch (error) {
    console.log("error connecting to DB :", error);
  }
};

export default connectDB;

 
