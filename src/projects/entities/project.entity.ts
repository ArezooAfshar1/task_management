import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Projects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //@Column()
    //status: enum;
}
