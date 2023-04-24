/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { SectionEntity } from "./section.entity";


@Injectable()
export class SectionService {
    findById: any;
    constructor(
        @InjectRepository(SectionEntity)
        private usersRepository: Repository<SectionEntity>,
    ) {}

//Get All User
    findAll(): Promise<SectionEntity[]> {
    return this.usersRepository.find();
    }

    findOne(id: number): Promise<SectionEntity> {
        const x = this.usersRepository.findOneBy({id});
        return x;
    }

    create(section: SectionEntity): Promise<SectionEntity>{
    return this.usersRepository.save(section);
    }
    
    async update(id: number, section:SectionEntity) {
        await this.usersRepository.update(id, section)
    }

    async remove(id: number): Promise<void>{
        await this.usersRepository.delete(id);
    }
}