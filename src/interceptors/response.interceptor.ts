import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { IResponse } from "@type";
import { Observable, map } from "rxjs";

export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((resp) => {
                const {data, statusCode, message, ...rest} = resp
                return {
                    data: data || resp || [],
                    statusCode: statusCode || context.switchToHttp().getResponse().statusCode,
                    message: message || "",
                    ...rest
                } as IResponse
            }
            )
        )
    }
}