"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const myDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1979',
    database: 'typeorm-db',
    entities: [path_1.default.join(__dirname, '**/*.entity{.ts,.js}')],
    logging: true,
    synchronize: true
});
exports.default = myDataSource;
