const boom = require('@hapi/boom');

class OrderService {
    constructor() {}

    async find() {
        return []
    }

    async findOne(id) {
        return { id }
    }

    async create(data) {
        return data;
    }

    async update(id, data) {
        return {
            id,
            data
        }
    }

    async delete(id) {
        return { id };
    }
}

module.exports = OrderService;