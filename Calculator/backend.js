const express = require("express");
const app = express();
app.listen(8000, () => console.log("Server is running on Port 8000"));
app.get("/", (req, res) => res.sendFile(__dirname + "/front.html"));
app.get("/add", (req, res) => res.sendFile(__dirname + "/common.html"));
app.get("/subtract", (req, res) => res.sendFile(__dirname + "/common.html"));
app.get("/multiply", (req, res) => res.sendFile(__dirname + "/common.html"));
app.get("/divide", (req, res) => res.sendFile(__dirname + "/common.html"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  if (req.get("referer").includes("/add")) {
    var a = Number(req.body.n1);
    var b = Number(req.body.n2);
    var sum = a + b;
    res.send("The sum of " + a + " and " + b + " is : " + sum);
  } else if (req.get("referer").includes("/subtract")) {
    var a = Number(req.body.n1);
    var b = Number(req.body.n2);
    var sub = a - b;
    res.send("The subtraction of " + a + " and " + b + " is : " + sub);
  } else if (req.get("referer").includes("/multiply")) {
    var a = Number(req.body.n1);
    var b = Number(req.body.n2);
    var mul = a * b;
    res.send("The multiplication of " + a + " and " + b + " is : " + mul);
  } else if (req.get("referer").includes("/divide")) {
    var a = Number(req.body.n1);
    var b = Number(req.body.n2);
    var div = a / b;
    res.send("The division of " + a + " and " + b + " is : " + div);
  }
});
