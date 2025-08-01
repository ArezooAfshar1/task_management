import { IsEnum, IsNotEmpty, IsOptional, IsString, Min, MinLength } from 'class-validator';
import {TaskStatusEnum} from '../enums/taskStatusEnum';

export class CreateTaskDto {
  @IsString({ message: 'عنوان باید یک رشته باشد' })
  @MinLength(3, { message: 'عنوان حداقل باید شامل 3 کاراکتر باشد' })
  @IsNotEmpty({ message: 'وارد کردن عنوان الزامی است ' })
  title: string;

  @IsString({ message: 'توضیحات باید یک رشته باشد' })
  @MinLength(10, { message: 'توضیخات باید حداقل شامل 10 کاراکتر باشد' })
  @IsOptional()
  description: string;

  @IsEnum(TaskStatusEnum, {message: 'وضعیت پروژه نامعتبر است '})
  @IsOptional()
  status: TaskStatusEnum;

  @IsNotEmpty({message: "پروژه حتما باید وارد شود"})
  projectId: number;
}
