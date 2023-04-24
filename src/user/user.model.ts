/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  UserService } from "../user/user.service";
import { UserEntity } from "./user.entity";
import { UserController } from "./user.controller";
import { ContactEntity } from "src/contact/contact.entity";
import { SectionEntity } from "src/section/section.entity";
import { SubjectEntity } from "src/subject/subject.entity";
import { SubjectService } from "src/subject/subject.service";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity, ContactEntity, SectionEntity, SubjectEntity])],
    controllers: [UserController],
    providers: [UserService, SubjectService],
})

export class UserModel{}