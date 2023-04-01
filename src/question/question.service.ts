import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(createQuestionDto: CreateQuestionDto) {
    const data = {
      ...createQuestionDto
    }

    const createdQuestion = await this.prismaService.question.create(
      {
        data
      }
    );

    return createdQuestion;
  }

  async findAll() {
    const questions = await this.prismaService.question.findMany();

    return questions;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
