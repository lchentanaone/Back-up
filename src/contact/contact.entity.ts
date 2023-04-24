/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,OneToOne } from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity({name: "contact"})
export class ContactEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number:string;

    @Column()
    email:string;

    @OneToOne(() => UserEntity, (user) => user.contact)
    user: UserEntity
}