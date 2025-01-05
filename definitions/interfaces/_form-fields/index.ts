import { FIELD_TYPE } from "@/definitions/enums";

export interface ShortTextFieldI {
  type: FIELD_TYPE;
  label: string;
  required?: boolean;
  helperText?: string;
}