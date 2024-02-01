import { MongoClient } from "mongodb";

async function connectToDB() {
  try {
    const connection =await MongoClient.connect(
      "mongodb+srv://talhamalick19:talha123@cluster0.kuh5jbc.mongodb.net/?retryWrites=true&w=majority"
    );
    return connection;
  } catch (error) {
    console.log(error);
  }
}

export default connectToDB;