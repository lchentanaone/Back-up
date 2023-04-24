/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectDto } from './create-subject.dto';
import { IsString ,IsInt, IsOptional } from '@nestjs/class-validator';
import { UserEntity } from 'src/user/user.entity';

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {
    @IsInt()
    id: number;

    @IsString()
    subject: string;

    @IsOptional()
    user: UserEntity[];
}