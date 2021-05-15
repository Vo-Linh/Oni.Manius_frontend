import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class imgProject_index extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Date: string;

    @Column()
    Description: string;

    @Column()
    img: string;

}