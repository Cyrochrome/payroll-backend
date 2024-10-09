import User from "./UserModel";
import Key from "./KeyModel";

User.hasOne(Key, {
  foreignKey: "user_id",
  as: "key",
});
Key.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});
