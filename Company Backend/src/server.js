const express = require("express");
const cors = require("cors");
const app = express();
const Route = require("./Routes/Routes");

const PORT = process.env.PORT || 7700;

app.use(express.json());

app.use(cors());
app.use("/", Route);
app.get("/health", (req, res) => {
  res.send("health");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server created at ${PORT}`);
});
