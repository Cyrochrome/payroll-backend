import app from "./app";
import sequelize from "./config/database";

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connection established successfully");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

const startServer = async () => {
  await testConnection;
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
