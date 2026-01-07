require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.post("/api/notifications", require("./controllers/notificationController").sendNotification);

app.listen(process.env.PORT, () => {
  console.log("Notification Service running on port " + process.env.PORT);
});
