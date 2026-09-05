import datatypes, { Model } from 'sequelize';
import sequelize from '../config/DataBase.js';
import { UserModel } from './User.js';

export const ProfileModel = sequelize.define(
    'Profile', {
        first_name: {
            type: datatypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: datatypes.STRING(100),
            allowNull: false
        },
        biography: {
            type: datatypes.TEXT,
            allowNull: true
        },
        avatar_url:{
            type: datatypes.STRING(255),
            allowNull: true
        },
        birth_date:{
            type: datatypes.DATEONLY,
            allowNull: true
        },
        user_id:{
            type: datatypes.INTEGER,
            unique: true,
            references: {
                Model: UserModel,
                key: "id"
            }
        }
    },
    {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});