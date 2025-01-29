import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import Employee from "../EmployeeModel";

class Salary extends Model {
  public salary_id!: string;
  public currency!: string;
  public salary_amount!: number;
  public status!: number;
  public salary_paid!: Date;
  public salary_start!: Date;
  public salary_end!: Date | null;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date | null;

  public employee_id!: string;
}

Salary.init(
  {
    salary_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    currency: {
      type: DataTypes.STRING(3),
    },
    salary_amount: {
      type: DataTypes.DECIMAL(32, 2),
    },
    status: {
      type: DataTypes.TINYINT({
        length: 1,
      }),
    },
    salary_paid: {
      type: DataTypes.DATEONLY,
    },
    salary_start: {
      type: DataTypes.DATEONLY,
    },
    salary_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
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
    tableName: "salary",
    timestamps: true,
    paranoid: true,
  }
);

export default Salary;
