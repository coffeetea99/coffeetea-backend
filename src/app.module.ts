import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
import PingController from './ping.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      logging: config.SQLITE_LOGGING === 'true',
      synchronize: config.SQLITE_SYNCHRONIZE === 'true',
    })
  ],
  controllers: [PingController],
  providers: [],
})
export default class AppModule {}
