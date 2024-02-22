import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './entities/user.entity';
import { EmployeeEntity } from './entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'resort_management',
    entities: [UserEntity,EmployeeEntity],
    synchronize: true
  }),],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }

