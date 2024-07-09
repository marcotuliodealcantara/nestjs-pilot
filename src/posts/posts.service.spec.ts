import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { Model } from 'mongoose';

describe('PostsService', () => {

  const execute = new PostsService(Model);

  jest
    .spyOn(execute, 'create');

  it('should be defined', () => {
    expect(execute).toBeDefined(); 
  });

  // create a new test case
  it('should be defined', () => {
    expect(execute.create).toBeDefined();
  });

  it('should be defined', () => {
    expect(Model).toBeDefined();
  });

  it('should be defined', () => {
    expect(execute.findAll).toBeDefined();
  });


  
});
