const app = require("express")();

app.use("/", (req, res) => {
  res.send("Hello World");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
