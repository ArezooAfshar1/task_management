import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import projectStatusEnum from "../enums/project.enum";

export class CreateProjectDto {

    @IsNotEmpty({ message: "نام پروژه نمیتواند خالی باشد" })
    @IsString({ message: "نام پروژه باید رشته باشد"})
    name: string;

    @IsEnum(projectStatusEnum, {message: 'وضعیت پروژه نامعتبر است '})
    status: projectStatusEnum
}
