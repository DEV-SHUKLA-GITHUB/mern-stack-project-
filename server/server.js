import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = 4000;
const app = express();
app.use(cors());

await mongoose.connect(
  "mongodb+srv://Dev:dev123@dev-mern.tlavaf2.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");
// .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/transaction", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
