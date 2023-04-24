/* eslint-disable prettier/prettier */
import { IsString ,IsInt } from '@nestjs/class-validator';
import { UserEntity } from 'src/user/user.entity';
// import { UserEntity } from 'src/user/user.entity';

export class CreateSectionDto {
    @IsInt()
    id: number;

    @IsString()
    section: string;

    //
    @IsString()
    userId: string

    user:UserEntity
}

