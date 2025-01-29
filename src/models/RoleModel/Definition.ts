import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Role extends Model {
  public role_id!: string;
  public role_name!: string;
  public description!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date | null;
}

Role.init(
  {
    role_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    role_name: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "role",
    timestamps: true,
    paranoid: true,
  }
);

export default Role;
