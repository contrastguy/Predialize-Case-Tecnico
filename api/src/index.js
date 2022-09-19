const app = require("express")();
const cors = require("cors");
const { json } = require("express");
const { load } = require("../clients.mock");
const route  = require("./routes")
app.use(json())
app.use(cors());

app.use("/",route)

app.listen(3030, () => {
  console.log(`Api running at :3030`);

});

