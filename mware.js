const express = require("express");
const zod = require("zod");
const app = express();

// Define the Zod schema
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/h", (req, res) => {
  try {
    const kidneys = req.body.kidneys; // Extract kidneys from the request body
    const response = schema.parse(kidneys); // Validate kidneys using the schema

    res.status(200).send({
      success: true,
      response,
    });
  } catch (err) {
    // Handle validation errors
    res.status(400).send({
      success: false,
      message: err.errors || "Invalid request body",
    });
  }
});

app.listen(5007, () => {
  console.log("Server is running on port 5007");
});
