import { IsBoolean } from "class-validator";
import { CreateUserDto } from "src/modules/user/dto/user.create.dto";

export class CreateAuthDto extends CreateUserDto {
    @IsBoolean()
    isGuest?:boolean
}
