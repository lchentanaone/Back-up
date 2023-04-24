/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinTable} from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity({name: "subject"})
export class SubjectEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject:string;

    @ManyToMany(() => UserEntity,{ cascade: true, })
    @JoinTable()
    user: UserEntity[];
}