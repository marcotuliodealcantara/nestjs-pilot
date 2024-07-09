import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://marcotuliodealcantara:NKGnIDErGgAIH2uV@marcofornestjs.9jdndm6.mongodb.net/?retryWrites=true&w=majority&appName=marcofornestjs'), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
