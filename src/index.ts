import "reflect-metadata";
import express from "express";
import mysql2 from "mysql2"; //driver that help to intract to DBMS software, eg postgress,mongodb  = driver as tarm

const app = express();
const port = 8000;

app.listen(port, () => {
  //    console.log("error while connecting to server");
  console.log("connected to server");
});

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
