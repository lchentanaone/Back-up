/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch, Inject, forwardRef } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUserDto } from "./dto/update-users.dto";
import { SubjectService } from "src/subject/subject.service";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";

@Controller('user')
export class UserController {
  constructor(
    private usersService: UserService,
    @Inject(forwardRef(() => SubjectService))
    private readonly subjectService: SubjectService,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
    ) {}

    @Get()
    async fillAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.usersService.findOne(+id);
    }

    @Post()
        create(@Body() createUsersDto: CreateUsersDto) {
          return this.usersService.create(createUsersDto);
        }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        this.usersService.update(+id, updateUserDto);
        return "Updated"
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.usersService.remove(+id);
        return "Deleted!";
    }

    @Post('/enrolltosubject')
    async enrollToSubject(@Body() { userId, subjectId}) {
      const user = await this.usersService.findOne(+userId);
      const subject = await this.subjectService.findOne(+subjectId);
      user.subject = [subject];
      subject.user = [user]
      return this.usersRepository.save(user)
    }
}