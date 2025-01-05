import { FIELD_TYPE } from "@/definitions/enums";
import { UseFormRegister, FieldValues } from 'react-hook-form'

export interface ShortTextFieldI {
  type: FIELD_TYPE;
  label: string;
  required?: boolean;
  helperText?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}