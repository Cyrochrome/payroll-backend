import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "../UserModel";

class Profile extends Model {
  public profile_id!: string;
  public national_id!: string;
  public name!: string;
  public gender!: string;
  public blood_type!: string;
  public religion!: string;
  public address!: string;
  public birthday!: Date;
  public birthplace!: string;
  public phone!: string;
  public relationship!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public user_id!: string;
}

Profile.init(
  {
    profile_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    national_id: {
      type: DataTypes.STRING(40),
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    gender: {
      type: DataTypes.STRING(10),
    },
    blood_type: {
      type: DataTypes.STRING(5),
    },
    religion: {
      type: DataTypes.STRING(20),
    },
    address: {
      type: DataTypes.TEXT,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    birthplace: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING(30),
    },
    relationship: {
      type: DataTypes.STRING(30),
    },
    user_id: {
      type: DataTypes.STRING(40),
      references: {
        model: User,
        key: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "profile",
    timestamps: true,
    paranoid: true,
  }
);

export default Profile