/* eslint-disable prettier/prettier */
import { IsString ,IsInt } from '@nestjs/class-validator';
import { ContactEntity } from 'src/contact/contact.entity';
import { SectionEntity } from 'src/section/section.entity';
import { SubjectEntity } from 'src/subject/subject.entity';
import { UserEntity } from '../user.entity';

export class CreateUsersDto {
    @IsInt()
    id: number;

    @IsString()
    email: string;

    @IsString()
    name: string;
    
    @IsString()
    contactId: string;

    @IsString()
    contact: ContactEntity;
    
    @IsString()
    userId: string

    @IsString()
    section: SectionEntity[];
    
    @IsString()
    subject: SubjectEntity[];

    @IsString()
    subjectId: string

    @IsString()
    user:UserEntity[]
    
}
