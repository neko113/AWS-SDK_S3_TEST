import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
  controllers: [ImageController],
  providers: [S3Service, ImageService],
})
export class ImageModule {}
