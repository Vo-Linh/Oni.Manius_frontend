import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Member extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Full_Name: string;

    @Column()
    Role: string;

    @Column()
    Description: string;

    @Column()
    img: string;

}
