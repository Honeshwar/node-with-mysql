import "reflect-metadata";
import express from "express";
import { AppSource } from "./config/data-sources";
import { config } from "dotenv";
import { User } from "./model/user";

config({ path: ".env.prod" });
const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  const userRepo = AppSource.getRepository(User);

  //create
  let user: any = new User();
  user.name = "Honeshwar";
  await userRepo.save(user);
  console.log("API SUCCESSFULLY");

  // get
  user = await userRepo.find();
  // update
  await userRepo.update(1, { name: "Thakur" });
  // delete
  await userRepo.delete(6);
  res.json(user);
});

AppSource.initialize()
  .then(() => {
    console.log("DATABASE IS CONNECTED SUCCESSFULLY");
    app.listen(port, () => {
      console.log("connected to server");
    });
  })
  .catch((err) =>
    console.log("error while connecting to database ", err, {
      type: "mysql",
      host: process.env.MYSQL_HOST,
      username: process.env.MYSQL_USERNAME,
      port: Number(process.env.MYSQL_PORT),
      database: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_PASSWORD,
    })
  );

// import mysql2 from "mysql2"; //driver that help to intract to DBMS software, eg postgress,mongodb  = driver as tarm
// const connection = mysql2.createConnection({
//     host: "localhost", //ip address
//     database: "learning",
//     user: "root",
//     password: "h.t@t566654",
//   });
//     connection.connect((err) => {
//       if (err) console.log("Error While connected database");

//       console.log("DATABASE CONNECTED");
//     });
