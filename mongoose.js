const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://harsh:admin_password@cluster0.a8t8d.mongodb.net/<database_name>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, 
});

// Create the model
const User = mongoose.model("User", userSchema);

// Create a user instance
const user = new User({
  name: "Harsh Yadav",
  email: "tzirw@example.com",
  password: "123456",
});

// Save the user to the database
user
  .save()
  .then(() => console.log("User saved successfully"))
  .catch((err) => console.error("Error saving user:", err));
