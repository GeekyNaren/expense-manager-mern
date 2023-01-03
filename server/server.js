import express from "express";
import mongoose from 'mongoose';
import cors from 'cors'

const PORT = 4000
const app = express();

app.use(cors);

async function connect(){
    await mongoose.connect(
        "mongodb+srv://geekynaren:geekynaren@expense-manager-mern.evx2qb8.mongodb.net/?retryWrites=true&w=majority"
      );
      console.log("MongoDB connection successful.");
}
export default connect;

app.get('/',(req,res)=>{
    res.send('Server Side');
});

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:4000');
});