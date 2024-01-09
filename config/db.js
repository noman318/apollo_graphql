import mongoose from "mongoose";

const connectToDb = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL, {
    dbName: "Graph_QL_Apollo",
  });
  console.log(`MongoDb connected succuessfully ${conn.connection.host}`);
};

export default connectToDb;
