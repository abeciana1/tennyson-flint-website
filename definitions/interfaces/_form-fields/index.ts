import { FIELD_TYPE, COLORS } from "@/definitions/enums";
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

export interface ShortTextFieldI {
  type: FIELD_TYPE;
  label: string;
  required?: boolean;
  helperText?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  textColor: COLORS;
  errors: FieldErrors
}

export interface TextAreaI {
  label: string;
  required?: boolean;
  helperText?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  textColor: COLORS;
  errors: FieldErrors
}