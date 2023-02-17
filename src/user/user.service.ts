import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService){}

  async  create(createUserDto: CreateUserDto) {
    const data ={
      ...createUserDto,
      password:await  bcrypt.hash(createUserDto.password,10)
    }

    const createdUser = await this.prismaService.user.create({
      data
    })

    return {
      ...createdUser,
      password:undefined
    }
  }

 
  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where:{
        email
      }
    })

    return {
      ...user,
      password:undefined
    }
  }

 
}
