import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database";

// const {DataTypes} = Sequelize

const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName:true
});

export default User;

(async()=> {
    await db.sync()
})()