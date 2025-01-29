import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

class Bonus extends Model {
  public bonus_id!: string;
  public bonus_ammount!: number;
  public bonus_description!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public tracking_id!: string;
}

Bonus.init(
  {
    bonus_id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    bonus_ammount:{
        type:DataTypes.DECIMAL(32,2)
    }
  },
  {
    sequelize,
    tableName: "bonus",
    timestamps: true,
    paranoid: true,
  }
);
