import { IResponseCodeMessage } from "@type";
import { EStatusCode } from "constant";

export const DUPLICATE_EMAIL: IResponseCodeMessage = { statusCode: EStatusCode.DUPLICATE_EMAIL, message: 'This email already exists' };
export const WRONG_PASSWORD: IResponseCodeMessage = { statusCode: EStatusCode.WRONG_PASSWORD, message: 'Password are incorrect' };
export const WRONG_EMAIL: IResponseCodeMessage = { statusCode: EStatusCode.WRONG_EMAIL, message: 'Email are incorrect' };
export const EMAIL_NOT_REGISTED: IResponseCodeMessage = { statusCode: EStatusCode.EMAIL_NOT_REGISTED, message: 'Email are incorrect' };
