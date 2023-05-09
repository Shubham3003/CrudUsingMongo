const dbConnect=require('./mongodb')



const main=async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}

main();

    // dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })
//console.log(dbConnect());

/*
1.
The code imports the MongoClient class from the mongodb module and sets the URL
 and database name for the MongoDB instance.
2.
A new MongoClient instance is created and assigned to the client variable.
3.
The getdata function is defined as an async function that uses await to wait 
for the connection to the MongoDB instance to be established.
4.
After the connection is established, the db variable is assigned to the Ecomm database,
 and the collection variable is assigned to the products collection.
5.
The find method is called on the collection to retrieve all documents in the       
collection, and the toArray method is called to convert the response to an 
array of documents.


The resulting array is logged to the console.
*/