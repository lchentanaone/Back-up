/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch } from "@nestjs/common";
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from "./dto/update-subject.dto";
import { SubjectService } from "./subject.service";

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

    @Get()
    async fillAll() {
        return this.subjectService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.subjectService.findOne(+id);
    }

    @Post()
        create(@Body() createSubjectDto: CreateSubjectDto) {
            return this.subjectService.create(createSubjectDto);
        }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
         this.subjectService.update(+id, updateSubjectDto);
         return "Updated"
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.subjectService.remove(+id);
      return "Deleted!";
    }
}