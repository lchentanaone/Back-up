/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch } from "@nestjs/common";
import { ContactService } from "../contact/contact.service";
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from "./dto/update-section.dto";
import { SectionService } from "./section.service";

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

    @Get()
    async fillAll() {
        return this.sectionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.sectionService.findOne(+id);
    }

    @Post()
        create(@Body() createSectionDto: CreateSectionDto) {
            return this.sectionService.create(createSectionDto);
        }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSectionDto: UpdateSectionDto) {
         this.sectionService.update(+id, updateSectionDto);
         return "Updated"
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.sectionService.remove(+id);
      return "Deleted!";
    }
}