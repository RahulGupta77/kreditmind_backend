const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://d9straww:EtmZa8A9irEGGsrB@rahulgupta.tdewb.mongodb.net/kreditmind"
  );
};

module.exports = connectDb;
