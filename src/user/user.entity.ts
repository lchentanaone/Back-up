/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany } from "typeorm";
import { SectionEntity } from "src/section/section.entity";
import { SubjectEntity } from "../subject/subject.entity";
import { ContactEntity } from "./../contact/contact.entity";

@Entity({name: "users"})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    email:string;
    
    @OneToOne(() => ContactEntity, (contact) => contact.user, { cascade: true,})
    @JoinColumn()
    contact: ContactEntity;
    
    @OneToMany(() => SectionEntity, (section) => section.user)
    section: SectionEntity[];

    @ManyToMany(() => SubjectEntity, (subject) => subject.user)
    subject: SubjectEntity[];
}