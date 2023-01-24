import { DataTypes, Model } from "sequelize";

import db from '../db';

class Test extends Model {

}

const model = Test.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'test'
});
