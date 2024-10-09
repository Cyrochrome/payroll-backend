import express from "express";
import sequelize from "./config/database";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database & Tables Created!");
  } catch (error) {
    console.error("Error in creating the database or tables: ", error);
  }
};

syncDatabase();

export default app;
