import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import Employee from "../EmployeeModel";

class Tracking extends Model {
  public tracking_id!: string;
  public total_bonus!: number;
  public total_deduction!: number;
  public net_salary!: number;
  public tracking_paid!: Date;
  public tracking_start!: Date;
  public tracking_end!: Date;
  public status!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public employee_id!: string;
}

Tracking.init(
  {
    tracking_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    total_bonus: {
      type: DataTypes.DECIMAL(32, 2),
    },
    total_deduction: {
      type: DataTypes.DECIMAL(32, 2),
    },
    net_salary: {
      type: DataTypes.DECIMAL(32, 2),
    },
    tracking_paid: {
      type: DataTypes.DATEONLY,
    },
    tracking_start: {
      type: DataTypes.DATEONLY,
    },
    tracking_end: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.TINYINT({ length: 1 }),
    },
    employee_id: {
      type: DataTypes.STRING(40),
      references: {
        model: Employee,
        key: "employee_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "tracking",
    timestamps: true,
    paranoid: true,
  }
);

export default Tracking;
