/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete, Patch } from "@nestjs/common";
import { ContactService } from "../contact/contact.service";
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateUserDto } from "./dto/update-contact.dto";

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

    @Get()
    async fillAll() {
        return this.contactService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.contactService.findOne(+id);
    }

    @Post()
        create(@Body() createContactDto: CreateContactDto) {
            return this.contactService.create(createContactDto);
        }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateContactDto: UpdateUserDto) {
         this.contactService.update(+id, updateContactDto);
         return "Updated"
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.contactService.remove(+id);
      return "Deleted!";
    }
}