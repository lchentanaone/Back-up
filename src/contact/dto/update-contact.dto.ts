/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsString ,IsInt, IsOptional } from '@nestjs/class-validator';
import { UserEntity } from 'src/user/user.entity';

export class UpdateUserDto extends PartialType(CreateContactDto) {
    @IsInt()
    id: number;

    @IsString()
    number: string;

    @IsString()
    email: string;

    @IsOptional()
    user: UserEntity;
}