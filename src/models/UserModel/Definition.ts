import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class User extends Model {
  public user_id!: string;
  public user_access!: string;
  public user_password!: string;
  public status!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
}

User.init(
  {
    user_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    user_access: {
      type: DataTypes.STRING(50),
      unique:true
    },
    user_password: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.TINYINT({ length: 1 }),
    },

  },
  {
    sequelize,
    tableName: "user",
    timestamps: true,
    paranoid: true,
  }
);

export default User