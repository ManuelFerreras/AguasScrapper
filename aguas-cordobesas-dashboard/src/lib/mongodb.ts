import mongoose from "mongoose";

mongoose.set('strictQuery', false)

const connection: any = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect("mongodb+srv://root:pepe123@cluster0.au1q4jf.mongodb.net/")

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect