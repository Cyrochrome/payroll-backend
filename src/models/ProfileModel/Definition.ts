import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "../UserModel";

class Profile extends Model {
  public profile_id!: string;
  public national_id!: string | null;
  public name!: string | null;
  public gender!: string | null;
  public blood_type!: string | null;
  public religion!: string | null;
  public address!: string | null;
  public birthday!: Date | null;
  public birthplace!: string | null;
  public phone!: string | null;
  public relationship!: string | null;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date | null;

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
      allowNull: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    blood_type: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    religion: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    birthplace: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    relationship: {
      type: DataTypes.STRING(30),
      allowNull: true,
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

export default Profile;
