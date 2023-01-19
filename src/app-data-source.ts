import path from 'path';
import { DataSource } from 'typeorm';

const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1979',
    database: 'typeorm-db',
    entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
    logging: true,
    synchronize: true
});

export default myDataSource;
