import { DataSource } from 'typeorm';

const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1979',
    database: 'typeorm-db',
    entities: ['src/entity/*.js'],
    logging: true,
    synchronize: true
});

export default myDataSource;
