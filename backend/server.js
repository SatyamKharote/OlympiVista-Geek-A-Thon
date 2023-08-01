require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const athleteRoutes = require("./routes/athleteRoutes");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());




// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message.red.underline.bold);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
// Use the athleteRoutes
app.use("/api", athleteRoutes);

const frontendPath = path.join(__dirname, "/dist");
app.use(express.static(frontendPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode On Port ${PORT}`.white.bold);
});
