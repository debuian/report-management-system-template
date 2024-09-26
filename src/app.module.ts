import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService):Promise<DataSourceOptions> => {
      const config = configService.get('databaseConfig');
      if (!config) {
        console.error('Database configuration is undefined!');
      } else {
        console.log('Connecting to the database with config:',process.env.POSTGRES_DATABASE);
      }
      return config;
    },
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
