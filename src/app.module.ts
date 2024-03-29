import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { SkillsModule } from './skills/skills.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get(
          'MONGO_USER',
        )}:${configService.get('MONGO_PWD')}@${configService.get(
          'MONGO_CLUSTER',
        )}/${configService.get('MONGO_DATABASE')}?retryWrites=true&w=majority`,
      }),
      inject: [ConfigService],
    }),
    CacheModule.register({
      ttl: 5,
      max: 100,
    }),
    ProjectsModule,
    UsersModule,
    SkillsModule,
    AuthModule,
  ],
})
export class AppModule {}
