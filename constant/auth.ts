export enum EAuthStatus {
    ACTIVE = 1,
    INACTIVE = 2
}
export enum EAuthLevel {
    ADMIN = 1,
    USER = 2,
    GUEST = 3
}
export const SALT_ROUNDS = 10