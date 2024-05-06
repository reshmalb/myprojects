


const connectToMongo = require("./database/db");
const express = require("express");
const app = express();
const path = require("path")
connectToMongo();
const port = 5000 || process.env.PORT;
var cors = require("cors");

app.use(cors({
    origin: process.env.FRONTEND_API_LINK
  }));
  app.use(express.json()); //to convert request data to json
  
  app.use('/media', express.static(path.join(__dirname, 'media')));
  
  
  // Credential Apis
  app.use("/api/adminauth", require("./routes/adminApi/credentials.route"));
  app.use("/api/product",require("./routes/productApi/productRoutes.route"));
  app.use("/api/user",require("./routes/userApi/userRoutes.route"));
  app.use("/api/player",require("./routes/playerApi/playerRoute.route"));
  app.listen(port, () => {
    console.log(`Server Listening On http://localhost:${port})`);

  });