/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/user.entity';
import { UserModel } from './user/user.model';
import { ContactEntity } from './contact/contact.entity';
import { ContactModel } from './contact/contact.model';
import { SectionEntity } from './section/section.entity';
import { SectionModel } from './section/section.model';
import { SubjectEntity } from './subject/subject.entity';
import { SubjectModel } from './subject/subject.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestcrud',
      entities: [UserEntity, ContactEntity, SectionEntity, SubjectEntity],
      synchronize: true,
      autoLoadEntities: true,
    }), UserModel,ContactModel,SectionModel, SubjectModel
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

