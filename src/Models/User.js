import datatypes from 'sequelize';
import sequelize from '../config/DataBase.js';

export const UserModel = sequelize.define('User', {
    username: {
        type: datatypes.STRING(100),
        allowNull: false,
        unique: true
    },
    email: {
        type: datatypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: datatypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: datatypes.ENUM('admin', 'user'),
        defaultValue: 'user',
        allowNull: false
    }},
    {
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deleted_at: "deleted_at"
},);