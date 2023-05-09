const express=require('express');
const dbConnect =require('./mongodb');

const app=express();

app.use(express.json());

app.get('/',async (req,res)=>{
    let data=await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
});

app.post('/',async (req,res)=>{
    let data=await dbConnect();
    let result=await data.insert(req.body)
    res.send(result)
});

app.put('/',async (req,res)=>{
    let data=await dbConnect();
    let result=data.updateOne(
        {name:"note5"},
        {$set:{price:1000}}
        )
    //console.log(req.body)
    res.send({result:"Update"})
}); 


app.delete("/",async(req,res)=>{
    console.log(req.params.id)
    const data=await dbConnect();
    const result=data.deleteOne({name:'note5'})
    res.send("done")
})
app.listen(5000)