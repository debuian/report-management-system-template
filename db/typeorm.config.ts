import databaseConfig from "src/config/database.config";
import { DataSource } from "typeorm";

const options  = databaseConfig();
export default new DataSource(options);