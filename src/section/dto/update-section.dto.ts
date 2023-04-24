/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSectionDto } from './create-section.dto';
import { IsString ,IsInt, IsOptional } from '@nestjs/class-validator';
import { UserEntity } from 'src/user/user.entity';

export class UpdateSectionDto extends PartialType(CreateSectionDto) {
    @IsInt()
    id: number;

    @IsString()
    section: string;

    @IsOptional()
    user: UserEntity;
}