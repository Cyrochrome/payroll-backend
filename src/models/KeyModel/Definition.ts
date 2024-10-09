import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "../UserModel";

class Key extends Model {
  public key_id!: string;
  public access!: string;
  public refresh!: string;
  public expired_at!: Date;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public user_id!: string;
}

Key.init(
  {
    key_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    access: {
      type: DataTypes.TEXT,
      unique: "tokens",
    },
    refresh: {
      type: DataTypes.TEXT,
      unique: "tokens",
    },
    expired_at: {
      type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.STRING(40),
      references: {
        model: User,
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "key",
    timestamps: true,
  }
);

export default Key;
