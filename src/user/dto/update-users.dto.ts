/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './create-users.dto';
import { IsString ,IsInt, IsOptional } from '@nestjs/class-validator';
import { ContactEntity } from 'src/contact/contact.entity';
import { SectionEntity } from 'src/section/section.entity';
import { SubjectEntity } from 'src/subject/subject.entity';

export class UpdateUserDto extends PartialType(CreateUsersDto) {
    @IsInt()
    id: number;

    @IsString()
    email: string;

    @IsString()
    name: string;

    @IsOptional()
    contact: ContactEntity;
    
    @IsOptional()
    section: SectionEntity[];

    @IsOptional()
    subject: SubjectEntity[];
}