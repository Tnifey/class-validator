import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";

export const ARRAY_MIN_SIZE = "arrayMinSize";

/**
 * Checks if array's length is as minimal this number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMinSize(array: unknown, min: number) {
    return array instanceof Array && array.length >= min;
}

/**
 * Checks if array's length is as minimal this number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMinSize(
    min: number,
    validationOptions?: ValidationOptions
): PropertyDecorator {
    return ValidateBy(
        {
            name: ARRAY_MIN_SIZE,
            constraints: [min],
            validator: {
                validate: (value, args) =>
                    arrayMinSize(value, args?.constraints[0]),
                defaultMessage: buildMessage(
                    (eachPrefix) =>
                        eachPrefix +
                        "$property must contain at least $constraint1 elements",
                    validationOptions
                ),
            },
        },
        validationOptions
    );
}
