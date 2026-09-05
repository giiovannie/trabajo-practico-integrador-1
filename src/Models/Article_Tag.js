import sequelize from "../config/DataBase.js";
import datatypes, { Model } from "sequelize";
import { ArticleModel } from "./Article.js";
import { TagModel } from "./Tag.js";

export const ArticleTagModel = sequelize.define(
    "Article_Tag",
    {
        article_id: {
            type: datatypes.INTEGER,
            allowNull: false,
            references: {
                Model: ArticleModel,
                key: "id"
            }
        },
        tag_id: {
            type: datatypes.INTEGER,
            allowNull: false,
            references:{
                Model: TagModel,
                key: "id",
            }
        }
    },
    {

    }
)