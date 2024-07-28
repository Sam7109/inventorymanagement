const express = require("express");
const sequelize = require("./model/description");
const prodRoute = require('./routes/productroutes')
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "views"))); // Serve static files from 'public' folder
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html")); // Serve 'index.html'
});


const port = 5000;

app.use('/submit',prodRoute)

sequelize
  .sync({ force: false }) // `force: false` means it won't drop tables if they already exist
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
