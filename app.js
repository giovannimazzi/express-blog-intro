const express = require("express");
const app = express();
const port = 3000;
const apiUrl = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
