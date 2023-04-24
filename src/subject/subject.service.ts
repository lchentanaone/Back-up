/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository } from "typeorm";
import { SubjectEntity } from "./subject.entity";


@Injectable()
export class SubjectService {
    findById: any;
    constructor(
        @InjectRepository(SubjectEntity)
        private usersRepository: Repository<SubjectEntity>,
        @InjectRepository(SubjectEntity)
        private subjectRepository: Repository<SubjectEntity>,
        // @Inject(forwardRef(() => UserService))
        // private userService: UserService,
    ) {}

//Get All User
    findAll(): Promise<SubjectEntity[]> {
    return this.usersRepository.find();
    }

    findOne(id: number): Promise<SubjectEntity> {
        const x = this.usersRepository.findOneBy({id});
        return x;
    }

    create(subject: SubjectEntity): Promise<SubjectEntity>{
    return this.usersRepository.save(subject);
    }

    
    
    async update(id: number, subject:SubjectEntity) {
        await this.usersRepository.update(id, subject)
    }

    async remove(id: number): Promise<void>{
        await this.usersRepository.delete(id);
    }
}