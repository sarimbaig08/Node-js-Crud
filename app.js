import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/postdata", (req, res) => {
  try {
    console.log(req.body);
    res.json({
      message: "Record added successfully",
      record: req.body,
    });
  } catch (error) {
    res.json({
      message: "error while adding Record",
      data: [],
      error: error.message,
      status: false,
    });
  }
});

app.get("/api/getdata", (req, res) => {
  try {
    res.json({
      message: "Data Fetched successfully",
    });
  } catch (error) {
    res.json({
      message: "error while fetching Record",
      data: [],
      error: error.message,
      status: false,
    });
  }
});

app.put("/api/updatedata", (req, res) => {
  try {
    res.json({
      message: "Data Updated successfully",
    });
  } catch (error) {
    res.json({
      message: "error while updating Record",
      data: [],
      error: error.message,
      status: false,
    });
  }
});

app.delete("/api/deletedata", (req, res) => {
  try {
    res.json({
      message: "Data Deleted successfully",
    });
  } catch (error) {
    res.json({
      message: "error while deleting Record",
      data: [],
      error: error.message,
      status: false,
    });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
