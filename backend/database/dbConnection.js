import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL,{
    dbName : "MERN_STACK_IRCS",
  }).then(()=> {
    console.log("Connected to database!")
  }).catch((err) => {
    console.log(`some error occured while connecting to database : ${err}`);
  });
};