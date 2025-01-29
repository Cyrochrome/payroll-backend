import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import Role from "../RoleModel";
import User from "../UserModel";

class UserRole extends Model {
  public user_role_id!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public user_id!: string;
  public role_id!: string;
}

UserRole.init(
  {
    user_role_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING(40),
      references: {
        model: User,
        key: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    role_id: {
      type: DataTypes.STRING(40),
      references: {
        model: Role,
        key: "role_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "user_role",
    timestamps: true,
  }
);

export default UserRole;
