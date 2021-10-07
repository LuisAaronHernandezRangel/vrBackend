const mongoose = require("mongoose");
function connect() {
  const mongoURI = "mongodb://localhost:27017/lushi";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(mongoURI, options)
    .then(() => {
      console.log("Connection established successfully");
    })
    .catch((error) => {
      console.log("Connection wrong", error);
    });
}

module.exports = connect;