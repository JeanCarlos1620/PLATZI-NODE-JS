const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'products';

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    isBlock: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValu: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValu: Sequelize.NOW
    }
}

class Product extends Model {
    static assocciate() {
        // assocciate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'Product',
            timeStamps: false
        }
    }
}

module.exports = { USER_TABLE, ProductSchema, Product };