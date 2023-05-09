const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB connection string
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertData(data) {
  try {
    await client.connect();
    const database = client.db("Ecomm");
    const collection = database.collection("products");
    const result = await collection.insertOne(data);
    console.log(`Inserted document with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Call the insertData function with the object you want to insert
const myObject = { name:'note5', brand:'mi',  price:440, category:'mobile' };
insertData(myObject);
