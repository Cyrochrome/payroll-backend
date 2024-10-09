import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import User from "../UserModel";

class Employee extends Model {
  public employee_id!: string;
  public hired_date!: Date;
  public status!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
  public user_id!: string;
  public position_id!: string;
}

Employee.init(
  {
    employee_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    hired_date: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.TINYINT({ length: 1 }),
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
    position_id: {
      type: DataTypes.STRING(40),
      references: {},
      onUpdate: "NO ACTION",
      onDelete: "NO ACTION",
    },
  },
  {
    sequelize,
    tableName: "employee",
    timestamps: true,
    paranoid: true,
  }
);

export default Employee;
