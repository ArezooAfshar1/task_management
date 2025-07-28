import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import  projectStatusEnum  from "../enums/project.enum";

@Entity()
export class Projects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: projectStatusEnum, default: projectStatusEnum.Enable})
    status: projectStatusEnum;
}
