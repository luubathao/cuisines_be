import { UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";

export default function UseAuth() {
    return applyDecorators(
        UseGuards(AuthGuard)
    )
}