import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Position extends Model {
  public position_id!: string;
  public position_name!: string;
  public currency!: string;
  public min_salary!: number;
  public max_salary!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date | null;
}

Position.init(
  {
    position_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    position_name: {
      type: DataTypes.STRING(100),
    },
    currency: {
      type: DataTypes.STRING(3),
    },
    min_salary: {
      type: DataTypes.DECIMAL(32, 2),
    },
    max_salary: {
      type: DataTypes.DECIMAL(32, 2),
    },
  },
  {
    sequelize,
    tableName: "position",
    timestamps: true,
    paranoid: true,
  }
);

export default Position;
