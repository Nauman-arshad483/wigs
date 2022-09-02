const app=require("./app");
const dotenv=require("dotenv");
//dotenv.config({path:"./backend/config/config.env"});
var HTTP_PORT = process.env.PORT || 8080;
const connectDatabase=require("./config/database")

connectDatabase().then(()=>{
    console.log("success");
    
})
.catch((err)=>{
    console.log(err);
    
})
const server=app.listen(HTTP_PORT,()=>{
 
    console.log(`server is working on http://localhost:${HTTP_PORT}`);
}) 

//unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server  due to un handled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })

})