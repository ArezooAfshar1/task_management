import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import  TaskStatusEnum  from "../enums/taskStatusEnum";
import { Project} from "../../projects/entities/project.entity";


@Entity({ name: "tasks"}) //table name
export class Task {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    title: string; 

    @Column()
    description: string;

    @Column({ type: 'enum', enum: TaskStatusEnum, default: TaskStatusEnum.Set})
    status: TaskStatusEnum

    @ManyToOne(()=> Project, (project)=> project.tasks)
    project: Project
}
