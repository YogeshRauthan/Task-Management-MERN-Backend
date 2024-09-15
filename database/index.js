const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yogeshrauthan00:00Yogesh00%4000@cluster0.t1xe4.mongodb.net/"
  )
  .then(() => console.log("MongoDB connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
