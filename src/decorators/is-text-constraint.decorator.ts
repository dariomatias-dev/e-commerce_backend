import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class IsTextConstraint implements ValidatorConstraintInterface {
  validate(text: string) {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

    return regex.test(text);
  }

  defaultMessage() {
    return 'The field must contain only letters and spaces.';
  }
}

export function IsText(validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsTextConstraint,
    });
  };
}
