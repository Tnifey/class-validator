import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import validator from "../../validator.ts";

export const IS_SURROGATE_PAIR = "isSurrogatePair";

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function isSurrogatePair(value: unknown): boolean {
  return typeof value === "string" && validator.isSurrogatePair(value);
}

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function IsSurrogatePair(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_SURROGATE_PAIR,
      validator: {
        validate: (value, args) => isSurrogatePair(value),
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "$property must contain any surrogate pairs chars",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
