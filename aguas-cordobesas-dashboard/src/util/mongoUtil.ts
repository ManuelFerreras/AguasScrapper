import mongoose from "mongoose"

const uri = process.env.NEXT_PUBLIC_MONGODB_URI || ""
const database = process.env.NEXT_PUBLIC_MONGODB_DATABASE || ""

export const initMongo = async () => {
    await mongoose.connect(uri.concat(database))
}