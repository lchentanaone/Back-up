/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne} from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity({name: "section"})
export class SectionEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    section:string;
    
    @ManyToOne(() => UserEntity, (user) => user.section)
    user: UserEntity;
}