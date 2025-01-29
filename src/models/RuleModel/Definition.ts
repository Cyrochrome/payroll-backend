import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Rule extends Model {
  public rule_id!: string;
  public rule_category!: string;
  public rule_name!: string;
  public rule_description!: string;
}

Rule.init(
  {
    rule_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    rule_category: {
      type: DataTypes.STRING(100),
      unique: "rule",
    },
    rule_name: {
      type: DataTypes.STRING(100),
      unique: "rule",
    },
    rule_description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "rule",
  }
);

export default Rule