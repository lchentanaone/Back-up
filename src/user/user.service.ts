/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { CreateUsersDto } from './../user/dto/create-users.dto';
import { ContactEntity } from "./../contact/contact.entity";
import { SectionEntity } from "src/section/section.entity";
import { SubjectEntity } from "src/subject/subject.entity";

@Injectable()
export class UserService {
    findById: any;
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        @InjectRepository(ContactEntity)
        private contactRepository: Repository<ContactEntity>,
        @InjectRepository(SectionEntity)
        private sectionRepository: Repository<SectionEntity>,
        @InjectRepository(SubjectEntity)
        private subjectRepository: Repository<SubjectEntity>,
    ) {}

            //Get All User
    findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find({
        relations: ['contact', 'section', 'subject']
    });
    }
    findOne(id: number): Promise<UserEntity>{
        return this.usersRepository.findOneBy({id});
        // return x;
    }

    async create(_user: CreateUsersDto): Promise<UserEntity>{
        // const contact = await this.contactRepository.findOne({where: {id: parseInt(_user.contactId)}});
        // console.log(_user.contactId);
        const user = new UserEntity();
        user.name = _user.name
        user.email = _user.email
        // user.contact = contact

        // const section = await this.sectionRepository.findOne({where: {id: parseInt(_user.userId)}});
        // // console.log(_user.userId);
        // user.section = _user.section;
        // user.section = [section]

        const _subject = await this.subjectRepository.findOne({where: {id: parseInt(_user.subjectId)}});
        // console.log(_user.contactId);
        user.subject = _user.subject
        user.subject = [_subject]

        return this.usersRepository.save(user);

    }

    async update(id: number, user:UserEntity) {
        await this.usersRepository.update(id, user)
    }

    async remove(id: number): Promise<void>{
        await this.usersRepository.delete(id);
    }

}