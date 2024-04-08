import 'dotenv/config';  // ES6 equivalent of `require('dotenv').config()`
import mongoose from 'mongoose';

let connectString = `mongodb+srv://` +                                          // protocol. is the "+srv" necessary?
                    `${encodeURIComponent(process.env.MDB_USERNAME)}` +         // auth: username
                    `:${encodeURIComponent(process.env.MDB_APIKEY)}` +          // auth: pw, auth token, etc.
                    `@${process.env.MDB_APPID}.${process.env.MDB_SERVER}` +     // full server name
                    `/${process.env.MDB_DATABASE}`                              // any "path"
console.log("DEBUG: connectString: " + connectString)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`DEBUG: DB Connection Failed!`)
        console.log(`error ${error.message}`)
    }
}

export default connectDB

// If we are only making a conneciton one time, how do we access different collections?
/*
let targetCollection = 'test';
await mongoose.connect(connectString, {'collection': targetCollection});
 */


// const CONNECTION_URL =
//   "mongodb+srv://ariestitt:mokube123@cluster0.jozbiey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
