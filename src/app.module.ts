import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
  ],
})
export class AppModule {}
