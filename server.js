const { PORT = 5001 } = process.env;

const app = require("./app.js");

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}

app.listen(PORT, listener);