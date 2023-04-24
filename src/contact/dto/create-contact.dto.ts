/* eslint-disable prettier/prettier */
import { IsString ,IsInt } from '@nestjs/class-validator';
import { UserEntity } from 'src/user/user.entity';

export class CreateContactDto {
    @IsInt()
    id: number;

    @IsString()
    number: string;

    @IsString()
    email: string;

    @IsString()
    contactId: number;

    user:UserEntity


}
