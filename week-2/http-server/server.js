const express = require('express'); // Import Express
const app = express(); // Create an Express app
const port = 3000; // App will listen on port 3000

// GET route for the root URL
app.get('/', (req, res) => {
  res.send("<b>Hello</b>"); // Send bold HTML text
});

// POST route for '/conversations'
app.post('/conversations', (req, res) => {
  console.log(req.headers); // Log request headers to the console
  res.send({
    msg: "2+2=4" // Respond with a JSON object
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

