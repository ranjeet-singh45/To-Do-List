import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items1 = [];
let items2 = [];
let items3 = [];

app.get("/", async(req, res) => {
  const result1 = await db.query("SELECT * FROM items1 ORDER BY id ASC");
  const result2 = await db.query("SELECT * FROM items2 ORDER BY id ASC");
  const result3 = await db.query("SELECT * FROM items3 ORDER BY id ASC");
  items1 = result1.rows;
  items2 = result2.rows;
  items3 = result3.rows;
  res.render("index.ejs", { listTitle1: "Today", listTitle2: "This Week", listTitle3: "This month", listItems1: items1, listItems2: items2, listItems3: items3});
});

app.post("/add", async (req, res) => {
  const item1 = req.body.newItem1;
  const item2 = req.body.newItem2;
  const item3 = req.body.newItem3;

  try {
    if(item1){await db.query("INSERT INTO items1 (title) VALUES ($1)", [item1]);}
    if(item2){await db.query("INSERT INTO items2 (title) VALUES ($1)", [item2]);}
    if(item3){await db.query("INSERT INTO items3 (title) VALUES ($1)", [item3]);}
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async(req, res) => {
  const item1 = req.body.updatedItemTitle1;
  const item2 = req.body.updatedItemTitle2;
  const item3 = req.body.updatedItemTitle3;
  const id1 = req.body.updatedItemId1;
  const id2 = req.body.updatedItemId2;
  const id3 = req.body.updatedItemId3;
  const list = req.body.list; 
  try {
    if(list === "Today"){await db.query("UPDATE items1 SET title = ($1) WHERE id = $2", [item1, id1]);}
    if(list === "This Week"){await db.query("UPDATE items2 SET title = ($1) WHERE id = $2", [item2, id2]);}
    if(list === "This Month"){await db.query("UPDATE items3 SET title = ($1) WHERE id = $2", [item3, id3]);}
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id1 = req.body.deleteItemId1;
  const id2 = req.body.deleteItemId2;
  const id3 = req.body.deleteItemId3;
  try {
    await db.query("DELETE FROM items1 WHERE id = $1", [id1]);
    await db.query("DELETE FROM items2 WHERE id = $1", [id2]);
    await db.query("DELETE FROM items3 WHERE id = $1", [id3]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
