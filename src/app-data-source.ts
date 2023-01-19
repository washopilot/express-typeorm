import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';

const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1979',
    database: 'typeorm-db',
    entities: [User],
    logging: true,
    synchronize: true
});

export default myDataSource;
