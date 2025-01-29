import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import Role from "../RoleModel";
import Rule from "../RuleModel";

class RoleRule extends Model {
  public role_rule_id!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public role_id!: string;
  public rule_id!: string;
}

RoleRule.init(
  {
    role_rule_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
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
    rule_id: {
        type: DataTypes.STRING(40),
        references: {
          model: Rule,
          key: "rule_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "role_rule",
    timestamps: true,
  }
);

export default RoleRule