import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb is connected")
    }
    catch(error) {
        console.log("mongoDb is not  connected syggessfuly");
        process.exit(1);
    }
}

export default ConnectDB 