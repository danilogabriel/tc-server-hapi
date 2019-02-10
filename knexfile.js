module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },
        client: 'pg',

        connection:'postgres://odjdemlqvbkqql:78be63d02c9b9b89223d8d3c71be55604db317744bd6537049a7f4e3a12c4d66@ec2-54-83-50-174.compute-1.amazonaws.com:5432/da1n944a54f32q',

        useNullAsDefault: true

    }

};

