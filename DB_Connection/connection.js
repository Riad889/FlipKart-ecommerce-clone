const mongoose=require('mongoose');

//Db connection url
const DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
})