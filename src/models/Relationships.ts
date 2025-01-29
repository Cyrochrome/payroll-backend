import User from "./UserModel";
import Key from "./KeyModel";
import Employee from "./EmployeeModel";
import Attendance from "./AttendanceModel";
import Position from "./PositionModel/Denition";
import Profile from "./ProfileModel";
import Role from "./RoleModel";
import Rule from "./RuleModel";
import RoleRule from "./RoleRuleModel";
import UserRole from "./UserRoleModel";
import Salary from "./SalaryModel";
import Tracking from "./TrackingModel";

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

Employee.hasMany(Tracking, {
  foreignKey: "employee_id",
  as: "tracking",
});
Tracking.belongsTo(Employee, {
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

Employee.hasMany(Salary, {
  foreignKey: "empleyee_id",
  as: "salary",
});
Salary.belongsTo(Employee, {
  foreignKey: "empleyee_id",
  as: "employee",
});

Role.belongsToMany(Rule, { through: RoleRule, foreignKey: "role_id" });
Rule.belongsToMany(Role, { through: RoleRule, foreignKey: "rule_id" });

User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });
Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id" });
