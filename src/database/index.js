import mongoose from "mongoose"

const connectToDB = async () => {
  const url =
    "mongodb+srv://namoanishtharu:j9QyJp3T7vrHpO7R@cluster0.ux2kn.mongodb.net/"

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e))
}

export default connectToDB
