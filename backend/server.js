const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  console.log(req.path, req.method);
  next();
});

// Routes
app.get("/", (req, res) => res.send({ message: "Welcome to WEB3" }));

// Start the server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
