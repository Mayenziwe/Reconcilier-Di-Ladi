const mongoose = require('mongoose');
const Schema = mongoose.schema;

//Connect to mongDB

mongoose.connect(
    "mongodb+srv://mayenziwe:mavezerr2002vezi@users.hh6wb.mongodb.net/Data",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("server is running"));

var sentclient2 = JSON.parse(localStorage.getItem("sentclient"));

const Userd = new Schema({
  namee: String,
  surname: String,
  email: String,
  phone: Number,
  address: String,
  suburb: String,
  city: String,
  province: String,
  phone2: Number,
  custmod: Object,
});
const User = mongoose.model("User", Userd);

var newUser = new User({
  namee: sentclient2.namee1,
  surname: sentclient2.surname1,
  email: sentclient2.email1,
  phone: sentclient2.phone1,
  address: sentclient2.address1,
  suburb: sentclient2.suburb1,
  city: sentclient2.city1,
  province: sentclient2.province1,
  phone2: sentclient2.phone21,
  custmod: sentclient2.custod,
});

newUser.save();