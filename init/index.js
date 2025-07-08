const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL =  "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await User.deleteOne({ username: "om" }); // Delete existing user before creating

  // Create/register the user 'om'
  const user = new User({ username: "om", email: "om@example.com" });
  const registeredUser = await User.register(user, "password123");

  // Assign this user as owner for all listings
  const listingsWithOwner = initData.data.map(listing => ({
    ...listing,
    owner: registeredUser._id
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("data was initialized");
};

initDB();
