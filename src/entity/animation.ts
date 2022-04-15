import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Animation extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    Title: string;

    @Column("longtext")
    Description: string;

    @Column()
    link: string;

}
