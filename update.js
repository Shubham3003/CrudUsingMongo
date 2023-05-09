const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const database = 'Ecomm';

async function updateDocument() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(database);
  const collection = db.collection('products');

  const filter = { name: 'note5' };
  const update = { $set: { price: 530 } };
  const result = await collection.updateOne(filter, update);

  console.log(result.modifiedCount);
  client.close();
}

updateDocument();
