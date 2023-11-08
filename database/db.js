import mongoose from "mongoose";
export const Connection=async(URL)=>{
    try{
       await mongoose.connect(URL,{ useUnifiedTopology:true,useNewurlParser:true});
       console.log(`Database connected Succesfully`);
    }
    catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
export default Connection;
