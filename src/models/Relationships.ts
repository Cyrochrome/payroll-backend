import User from "./UserModel";
import Key from "./KeyModel";
import Employee from "./EmployeeModel";
import Attendance from "./AttendanceModel";
import Position from "./PositionModel/Denition";
import Profile from "./ProfileModel";

User.hasOne(Key, {
  foreignKey: "user_id",
  as: "key",
});
Key.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

User.hasOne(Employee, {
  foreignKey: "user_id",
  as: "employee",
});
Employee.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

Employee.hasMany(Attendance, {
  foreignKey: "employee_id",
  as: "attendance",
});
Attendance.belongsTo(Employee, {
  foreignKey: "employee_id",
  as: "employee",
});

Position.hasMany(Employee, {
  foreignKey: "position_id",
  as: "employee",
});
Employee.belongsTo(Position, {
  foreignKey: "position_id",
  as: "position",
});

User.hasOne(Profile, {
  foreignKey: "user_id",
  as: "profile",
});
Profile.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});
