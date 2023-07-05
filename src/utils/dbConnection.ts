// Modules
import mongoose from 'mongoose';


export default async function createMongoConnection () {
  try {
    const dbConnection = process.env.DB_CONNECTION;
    if (!dbConnection) { process.exit(0); }
    await mongoose.connect(dbConnection);
    console.log("DB Online");
  } catch (err:any) {
    console.log(err);
    process.exit(0);
  }
}



