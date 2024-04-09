import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";

import postRoutes from "../routes/posts.js"

const app = express();

app.use("/posts", postRoutes)

// app.use(bodyParser.json({ limit: "30mb", exteneded: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", exteneded: true }));
app.use(express.urlencoded({ limit: '30mb' }))
app.use(express.json({ limit: "30mb" }));
app.use(cors());  // must be ABOVE route definitions!
app.use('/posts', postRoutes)

connectDB()

// const CONNECTION_URL =
//   "mongodb+srv://ariestitt:mokube123@cluster0.jozbiey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 5001;

// mongoose
//   .connect(CONNECTION_URL)
//   .then(() =>
//     app.listen(PORT, () => console.log(`server running on port ${PORT}`))
//   ).catch((error) => console.log(error));


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
