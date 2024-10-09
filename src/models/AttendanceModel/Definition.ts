import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

class Attendance extends Model {
  public attendance_id!: string;
  public date!: Date;
  public status!: number;
  public description!: string;
  public check_in_time!: Date;
  public check_out_time!: Date;
  public employee_id!: string;
}

Attendance.init(
  {
    attendance_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.TINYINT({
        length: 1,
      }),
    },
    description: {
      type: DataTypes.TEXT,
    },
    check_in_time: {
      type: DataTypes.TIME,
    },
    check_out_time: {
      type: DataTypes.TIME,
    },
    employee_id: {
      type: DataTypes.STRING(40),
      references:{

      }
    },
  },
  {
    sequelize,
    tableName: "attendance",
    timestamps: false,
  }
);

export default Attendance