/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  ContactService } from "./contact.service";
import { ContactEntity } from "./contact.entity";
import { ContactController } from "./contact.controller";

@Module({
    imports:[TypeOrmModule.forFeature([ContactEntity])],
    controllers: [ContactController],
    providers: [ContactService],
})

export class ContactModel{}