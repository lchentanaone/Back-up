/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { ContactEntity } from "./contact.entity";
// import { CreateUsersDto } from './dto/create-users.dto';

@Injectable()
export class ContactService {
    findById: any;
    constructor(
        @InjectRepository(ContactEntity)
        private usersRepository: Repository<ContactEntity>,
    ) {}

//Get All User
    findAll(): Promise<ContactEntity[]> {
    return this.usersRepository.find();
    }

    findOne(id: number): Promise<ContactEntity> {
        const x = this.usersRepository.findOneBy({id});
        return x;
    }

    create(contact: ContactEntity): Promise<ContactEntity>{
    return this.usersRepository.save(contact);
    }

    async update(id: number, contact:ContactEntity) {
        await this.usersRepository.update(id, contact)
    }

    async remove(id: number): Promise<void>{
        await this.usersRepository.delete(id);
    }

}