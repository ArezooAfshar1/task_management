import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'myuser',
      password: 'mypass',
      port: 5432,
      synchronize: true, // دیتابیس با تعغیراتی که ما در entity میدیدم تعغیر کنه 
      // تو حالت دولوپ اینو فعال میکنیم فقط 
      database: 'mydb',
      entities: [__dirname + '/**/entities/*.entity.js']  // گفتیم یه پوشه بیا عقب برو تو اس ار سی هر ماژولی بود رو باز کن برو تو ان تی تیز و دنبال فایلی با این پسوند بگرد 
    }),
    
    ProjectsModule,
    
    TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
