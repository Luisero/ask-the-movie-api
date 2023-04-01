import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerService {
  constructor(private readonly prismaService: PrismaService){}

  async create(createAnswerDto: CreateAnswerDto) {
    const data = {
      ...createAnswerDto
    }

    const createdAnswer = await this.prismaService.answer.create({
      data
    });

    return createdAnswer;
  }

  async findAll() {
    const answers = await this.prismaService.answer.findMany({
      
    })

    return answers;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
