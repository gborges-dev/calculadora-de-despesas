import { Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ECategoria } from "../../Enum";

const InputSelectCategoria = ({ form, required }: any) => {
  const { control } = form;

  return (
    <Controller
      name="categoria"
      control={control}
      render={({ field }) => (
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="categoria-label">Categoria</InputLabel>
          <Select
            {...field}
            labelId="categoria-label"
            label="Categoria"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            required={required}
          >
            {Object.entries(ECategoria)
              .filter(([key]) => isNaN(Number(key)))
              .map(([key, value]) => (
                <MenuItem key={value} value={value}>
                  {key.charAt(0) + key.slice(1).toLowerCase()}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default InputSelectCategoria;
