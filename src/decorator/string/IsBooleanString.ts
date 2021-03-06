import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import validator from "../../validator.ts";

export const IS_BOOLEAN_STRING = "isBooleanString";

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function isBooleanString(value: unknown): boolean {
  return typeof value === "string" && validator.isBoolean(value);
}

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function IsBooleanString(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BOOLEAN_STRING,
      validator: {
        validate: (value, args) => isBooleanString(value),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be a boolean string",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
