import * as React from "react";
import TextField from "@mui/material/TextField";
import { NumericFormat } from "react-number-format";
import { Controller } from "react-hook-form";

interface InputFieldMoneyProps {
  label?: string;
  value: number | string;
  control: any;
  required?: boolean;
}

const InputFieldMoneyControlled: React.FC<InputFieldMoneyProps> = ({ label = "Valor", value, control, required }) => {
  return (
    <Controller
        name="valor"
        control={control}
        render={({ field: { onChange, value } }) => (
          <NumericFormat
            value={value}
            onValueChange={(v) => onChange(v.floatValue || 0)}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            customInput={TextField}
            label={label}
            required={required}
          />
        )}
      />
  );
};

export default InputFieldMoneyControlled