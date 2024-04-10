import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import postRoutes from "../routes/posts.js"
import { serverport } from "../../../constants.jsx";


const url = `http://localhost:${ serverport }/posts`


const app = express();

connectDB()

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))  // not needed?
app.use(cors());  // must be ABOVE route definitions!

app.use('/posts', postRoutes)

// const CONNECTION_URL =
//   "mongodb+srv://ariestitt:mokube123@cluster0.jozbiey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(CONNECTION_URL)
//   .then(() =>
//     app.listen(PORT, () => console.log(`server running on port ${PORT}`))
//   ).catch((error) => console.log(error));


app.listen(serverport, ()=>{
    console.log(`listening on port ${serverport}`)
})
