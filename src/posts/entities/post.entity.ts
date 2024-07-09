import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

export type PostDocument = Post & Document;


@Schema()
export class Post {
  @Prop()
  titulo: string;


  @Prop()
  descricao: string;


  @Prop()
  autor: string;


  @Prop()
  texto: string;
}


export const PostSchema = SchemaFactory.createForClass(Post);