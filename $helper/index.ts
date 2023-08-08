/**
 * Throw custom exception
 *
 * @param condition
 * @param error
 */
export function throwIf(condition: any, error) {
    if (condition) {
        throw error
    }
    return true
}