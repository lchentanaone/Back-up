/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  SubjectService } from "./subject.service";
import { SubjectEntity } from "./subject.entity";
import { SubjectController } from "./subject.crontroller";

@Module({
    imports:[TypeOrmModule.forFeature([SubjectEntity])],
    controllers: [SubjectController],
    providers: [SubjectService],
})

export class SubjectModel{}