import { IsEmail, IsString, IsStrongPassword } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsString()
    username: string;
}
