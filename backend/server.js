require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const athleteRoutes = require("./routes/athleteRoutes");
const path = require("path");
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

// Middleware
app.use(cors());
// app.use(cors({
//   origin: 'https://olympivista.onrender.com', // Specify the allowed origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Specify the allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
// }));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://olympivista.onrender.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
//   next();
// });

app.use(bodyParser.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const frontendPath = path.join(__dirname, "/dist");
app.use(express.static(frontendPath));

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


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });



app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode On Port ${PORT}`.white.bold);
});
