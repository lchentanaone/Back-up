/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  SectionService } from "./section.service";
import { SectionEntity } from "./section.entity";
import { SectionController } from "./section.crontroller";

@Module({
    imports:[TypeOrmModule.forFeature([SectionEntity])],
    controllers: [SectionController],
    providers: [SectionService],
})

export class SectionModel{}