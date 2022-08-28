var mongoose = require("mongoose");
const Product=require("../models/productModel")
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectDatabase=()=>{
    
        
        return new Promise((resolve,reject)=>{
         
            let pass1 = encodeURIComponent("blueband483");
            let db=mongoose.connect(`mongodb+srv://blueband:${pass1}@innovtivewigs.tadwfkk.mongodb.net/storeDb?retryWrites=true&w=majority`).then((data)=>{
                console.log(`mongodb connected with server:${data.connection.host}`);
            }).catch((err)=>{
                console.log(err);
            })
            
            // db.on('error',(err)=>{
            //     console.log("failed connection");
            //     reject(err)
            // })
            // db.once('open',()=>{
            //     console.log("successfull connection");
            //     // User = db.model("products", Product);
            //     // resolve(User);
            //     resolve();
            // })
        })
}
module.exports=connectDatabase;