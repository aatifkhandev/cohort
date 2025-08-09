const express = require('express');
const app = express();
const port = 3003;

let tasks = [];
app.use(express.json());

//rate - limiter
const requests = {};
function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  if (!requests[ip]) {
    requests[ip] = { count: 1, firstRequestTime: now };
  } else {
    const timeSinceFirstRequest = now - requests[ip].firstRequestTime;

    if (timeSinceFirstRequest < 60 * 1000) {
      requests[ip].count++;
      if (requests[ip].count > 5) {
        return res
          .status(429)
          .json({ msg: "Too many requests. Try again later." });
      }
    } else {
      // Reset after 1 minute
      requests[ip] = { count: 1, firstRequestTime: now };
    }
  }
  next();
}
app.use(rateLimiter);

//routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res, next) => {
  const { id, title } = req.body;

  //  Simulate error if title === "fail"
  if (title === "fail") {
    return next(new Error("Simulated failure: Task title cannot be 'fail'"));
  }

  tasks.push({ id: parseInt(id), title, completed: true });
  res.json({ tasks });
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const title = req.body.title;

  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Invalid id" });
  }

  tasks[index].title = title;
  tasks[index].completed = true;
  res.json({ task: tasks[index] });
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const deletedTask = tasks.splice(index, 1);
  res.json({ deleted: deletedTask });
});

//error - handler
let errorCounter = 0;
function errorHandler(err, req, res, next) {
  errorCounter++;
  console.error(`Error ${errorCounter}: ${err.message}`);
  res.status(500).json({ msg: err.message });
}

// IMPORTANT: Error handler goes after all routes
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
