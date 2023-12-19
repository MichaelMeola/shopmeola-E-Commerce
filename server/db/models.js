import { DataTypes, Model } from "sequelize";
import connectToDB from "../db/db.js";
import url from 'url'
import util from 'util'

const db = await connectToDB('postgres:///shopmeola')

class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize: db
    }
)

class Product extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Product.init(
    {
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        s: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        m: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        l: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        xl: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize: db
    }
)

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

export { User, Product }