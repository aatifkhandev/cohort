const express = require('express'); 
const app = express(); // 
const port = process.env.port||3009; 

function add(a,b){
return a+b;
}


app.get('/', (req, res) => {
  const a = Number(req.query.a)
  const b = Number(req.query.b)
  const ans = add(a,b)
  res.send(ans)
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

