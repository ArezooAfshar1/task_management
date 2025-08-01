import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import projectStatusEnum from './enums/project.enum';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const newProject = this.projectRepository.create(createProjectDto);
      return this.projectRepository.save(newProject);
    } catch (error) {
      throw new BadRequestException('Error creating project');
    }
  }

  async findAll(
    status?: projectStatusEnum,
    limit: number = 10,
    page: number = 1,
  ) {
    const query = this.projectRepository.createQueryBuilder('projects');

    if (status) {
      query.where('status = :status', { status });
    }

    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }

  async findOne(id: number) {
    const project = await this.projectRepository.findOneBy({ id });

    if (!project) throw new NotFoundException(`Project ${id} is not found! `);
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectRepository.findOneBy({ id });

    if (!project) throw new NotFoundException(`project ${id} not found`);
    try {
      const updateProject = await this.projectRepository.update(
        id,
        updateProjectDto,
      );

      return updateProject;
    } catch (error) {
      throw new BadRequestException(`updating peoject failed`);
    }
  }

  async remove(id: number): Promise<void> {
    const result = await this.projectRepository.delete({ id });

    if (result.affected === 0)  // یعنی روی چند تا رکورد تانیر کذاشته اگر صفر بود یعنی هیجی 
      throw new NotFoundException(`project ${id} not found`);
  }
}
