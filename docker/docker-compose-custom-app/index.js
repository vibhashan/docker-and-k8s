import { exec } from "child_process";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 5000;

mongoose.connect("mongodb://mongo:27017", {
  dbName: "mydatabase",
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Docker compose up
const startContainers = async () => {
  exec(
    "docker compose -f custom-compose.yml up -d",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
};

// Express route to start containers
app.get("/start-containers", async (_, res) => {
  await startContainers();
  res.send("Containers are starting");
});

// Express route to check if containers are running
app.get("/check-containers", (_, res) => {
  exec("docker compose ls", (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  res.send("Containers are running");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
