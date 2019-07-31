const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const app = express();

//api key for alphavantage: KN4VMY078MZYWJ15
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stockMonkey");


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
