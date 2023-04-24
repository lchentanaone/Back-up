/* eslint-disable prettier/prettier */
import { IsString ,IsInt,IsOptional  } from '@nestjs/class-validator';
import { UserEntity } from 'src/user/user.entity';
// import { UserEntity } from 'src/user/user.entity';

export class CreateSubjectDto {
    @IsInt()
    id: number;

    @IsString()
    subject: string;

    @IsOptional()
    user:UserEntity[];
}

