import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "",
  define: {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  },
});

export default sequelize;
