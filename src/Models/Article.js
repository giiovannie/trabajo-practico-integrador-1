import sequelize from "../config/DataBase.js";
import datatypes, { Model } from "sequelize";
import { UserModel } from "./User.js";

export const ArticleModel = sequelize.define(
    'Article', {
        title: {
            type: datatypes.STRING(255),
            allowNull: false
        },
        content: {
            type: datatypes.TEXT,
            allowNull: false
        },
        excerpt: {
            type: datatypes.STRING(255),
            allowNull: true
        },
        status: {
            type: datatypes.ENUM('published', 'archived'),
            defaultValue: 'published',
            allowNull: false
        },
        user_id:{
            type: datatypes.INTEGER,
            allowNull: false,
            references:{
                Model: UserModel,
                key: "id"
            }
        }
    },
    {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        onDelete: true
    }
);