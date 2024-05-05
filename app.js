import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import mongoose from "mongoose";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(UIR)
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(" error", err.message);
  });

app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Record added successfully",
  });
});

const mongoSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    // required: true,
  },
});
const collectionData = new mongoose.model("sarim", mongoSchema);

const data = [
  {
    name: "Sarim",
    email: "sarim@gmail.com",
    company: "Designers Rockwall",
  },
  {
    name: "Mirza",
    email: "mirza@gmail.com",
    company: "mirza's cafe",
  },
  {
    name: "Baig",
    email: "baig@gmail.com",
    company: "Baig Tower",
  },
];

collectionData.insertMany(data);

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
