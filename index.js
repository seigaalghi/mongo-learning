const app = require("./server");
const port = 5000;
const db = require("./database/db");

db(() =>
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  })
);
