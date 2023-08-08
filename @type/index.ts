import { EStatusCode } from "constant"

export interface IParam {
    skip: number,
    take: number
}
export interface IResponseCodeMessage {
    statusCode?: EStatusCode | number
    message?: string
}
export interface IResponse extends IResponseCodeMessage {
    data: any
    totalPage?: number
}