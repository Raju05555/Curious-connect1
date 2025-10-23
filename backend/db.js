const mongoose = require("mongoose");

const url =
  "mongodb+srv://bantikryadav0555:Raju6204@cluster0.4rjre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
